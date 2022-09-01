import "./Admin.css";
import { useState } from 'react';
import DataService from "../services/dataService";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [saveProdSuccess, setSaveProdSuccess] = useState(false);
    
    const saveProduct = async () => {
        let fixProd = {...product};
        fixProd.price = parseFloat(fixProd.price);
        //fixProd.price = +fixProd.price;
        
        let service = new DataService();
        let savedProd = await service.saveProduct(fixProd);

        if(savedProd && savedProd._id) {
            setSaveProdSuccess(true);

            setTimeout(() => {
                setSaveProdSuccess(false);
            }, 3000);
        }
    }

    const productChange = (args) => {
        let value = args.target.value;
        let fieldName = args.target.name;

        // create a copy, modify the copy, set the copy
        let copy = {...product};
        copy[fieldName] = value;
        setProduct(copy);
    }

    const saveCoupon = () => {
        console.log(coupon);
    }

    const couponChange = (args) => {
        let value = args.target.value;
        let fieldName = args.target.name;

        let copy = {...coupon};
        copy[fieldName] = value;
        setCoupon(copy);
    }
    
    return(
        <div className="admin">
            <h1>Admin Page</h1>

            {saveProdSuccess ? <div className="alert-success">Product saved!</div> : null}

            <div className="flex-container">
                <div className="product-form">
                    <h3 className="section-title">Add new product</h3>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" id="txtTitle" onChange={productChange} />
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="price" id="numPrice" onChange={productChange} />
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input type="text" name="image" id="txtImage" onChange={productChange} />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input type="text" name="category" id="txtCategory" onChange={productChange} />
                    </div>
                    <button className="btn-add" onClick={saveProduct}>Add product</button>
                </div>
                <div className="coupon-form">
                    <h3 className="section-title">Coupon codes</h3>
                    <div className="field">
                        <label>Code</label>
                        <input type="text" name="code" id="txtCode" onChange={couponChange} />
                    </div>
                    <div className="field">
                        <label>Discount</label>
                        <input type="text" name="discount" id="txtDiscount" onChange={couponChange} />
                    </div>
                    <button className="btn-add" onClick={saveCoupon}>Save coupon</button>
                </div>
            </div>
        </div>
    )
}

export default Admin;