from flask import Flask, request, abort
from flask_cors import CORS
import json
from data import me
# from data import catalog
import random
from config import db
from bson import ObjectId

app = Flask(__name__)
CORS(app) #disable CORS, anyone can access this API

#--------------------------------------------------------#
#---------------------- UTILITY -------------------------#
#--------------------------------------------------------#

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj





@app.get("/")
def home():
    return "Hello from Flask"

@app.get("/test")
def test():
    return "Testing endpoint"

@app.get("/about")
def about():
    return "Jorge Tostado"

#--------------------------------------------------------#
#---------------------- API PRODUCTS --------------------#
#--------------------------------------------------------#

@app.get("/api/test")
def test_api():
    return json.dumps("OK")


# get /api/about return the me dictionary as json
@app.get("/api/about")
def about_api():
    return json.dumps(me)


@app.get("/api/catalog")
def get_catalog():
    cursor = db.Products.find({}) # this will read all products
    results = []

    for product in cursor:
        product = fix_id(product) # fix the _id ...again
        results.append(product)

    return json.dumps(results)


@app.post("/api/catalog")
def save_product():
    product = request.get_json()


    # validating
    if not "title" in product or len(product["title"]) <= 5:
        return abort(400, "ERROR: Must contain title with at least 5 characters")
    elif not "price" in product or float(product["price"]) <= 1.0:
        return abort(400, "ERROR: Must contain a price greater than 1")
    elif not "image" in product:
        return abort(400, "Must include an image")


    db.Products.insert_one(product)
    #print(product) # it should now have an _id assigned by the database

    # fix the ObjectId
    product = fix_id(product)

    return json.dumps(product)


@app.get("/api/product/<id>")
def get_product_by_id(id):
    result = db.Products.find_one({"_id": ObjectId(id)})
    if not result:
        return abort(404, "Product not found")

    result = fix_id(result)

    return json.dumps(result)


@app.get("/api/products/<category>")
def get_products_by_category(category):
    cursor = db.Products.find({"category": category})
    catalog = []

    for product in cursor:
        product = fix_id(product)
        catalog.append(product)

    return json.dumps(catalog)


@app.get("/api/count")
def get_catalog_count():
    cursor = db.Products.find({})
    catalog = []

    for product in cursor:
        catalog.append(product)

    count = len(catalog)
    return json.dumps(count)


@app.get("/api/catalog/total")
def get_catalog_total():
    cursor = db.Products.find({})
    total = 0

    for product in cursor:
        total += product["price"]
    
    return json.dumps(total)


@app.get("/api/catalog/cheapest")
def get_cheapest():
    cursor = db.Products.find({})
    
    cheapest = cursor[0]
    for product in cursor:
        if(product["price"] < cheapest["price"]):
            cheapest = product

    cheapest = fix_id(cheapest)
    return json.dumps(cheapest)


@app.get("/api/game/rps/<pl_choice>")
def play_rps(pl_choice):
    choices = ["rock", "paper", "scissors"]
    pl_choice = pl_choice.lower()
    
    # adds the players choice
    if pl_choice in choices:
        result = { "you": pl_choice }
    else:
        return abort(400, "Choose rock, paper or scissors to play")

    # generates the computer's choice
    pc_choice = choices[random.randint(0,2)]
    result.update({ "pc": pc_choice})

    # choosing the winner
    if pl_choice == pc_choice:
        result.update({"result": "It's a tie!"})
    elif (pl_choice == "rock" and pc_choice == "scissors") or (pl_choice == "paper" and pc_choice == "rock") or (pl_choice == "scissors" and pc_choice == "paper"):
        result.update({"result": "You won!"})
    else:
        result.update({"result": "You lost..."})


    return json.dumps(result)


@app.get("/api/coupons")
def get_coupons():
    cursor = db.Coupons.find({})
    coupons = []

    for coupon in cursor:
        coupon = fix_id(coupon)
        coupons.append(coupon)
    
    return json.dumps(coupons)


@app.post("/api/coupons")
def save_coupon():
    coupon = request.get_json()

    if not "code" in coupon:
        return abort(400, "ERROR: Must include a code")
    elif not "discount" in coupon:
        return abort(400, "ERROR: Must include a discount")

    db.Coupons.insert_one(coupon)
    coupon = fix_id(coupon)
    return json.dumps(coupon)







# remember to use flask --app server --debug run on cmd
# debug allows code to be loaded without needing to kill and restart the server
# app.run(debug=True)