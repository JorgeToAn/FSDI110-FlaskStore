import pymongo
import certifi


# MongoDB connection string
con_str = "mongodb+srv://JorgeToAn:jestmaster@cluster0.rode3mq.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())

db = client.get_database("Stelo")