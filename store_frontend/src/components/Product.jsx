import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../store/storeContext";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useContext(StoreContext).addToCart;

    const onAddClicked = () => {
        //create a copy of props.data
        //add quantity field
        //send copy to cart
        let propCopy = {...props.data, quantity: quantity};
        addToCart(propCopy);
    };

    const onQuantityChange = (quantity) => {
        setQuantity(quantity);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt="product-item" width={250} height={250} />
            <h4>{props.data.title}</h4>
            <div className="price-container">
                <label className="total">Total: ${getTotal()}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>
            <div className="flex-container">
                <QuantityPicker onChange={onQuantityChange}/>
                <button onClick={onAddClicked}>Add</button>
            </div>
            <p>{props.data.category}</p>
        </div>
    );
};

export default Product;