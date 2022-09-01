import "./Cart.css";
import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ProductInCart from "./ProductInCart";

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    const getCartCount = () => {
        let count = 0;

        for(let i=0; i<cart.length; i++){
            count += cart[i].quantity;
        }
        return count;
    }

    const getTotal = () => {
        let total = 0;

        for(let i=0; i < cart.length; i++){
            let product = cart[i];
            total += product.quantity * product.price;
        }
        return total.toFixed(2);
    }

    return(
        <div className="cart">
            <h1>Currently you have {String(getCartCount())} items in your cart</h1>
            <div className="flex-container">
                <div className="preview">
                    <h3 className="section-title">Preview</h3>
                    <div className="cart-items">
                        {cart.map((product) => (
                            <ProductInCart key={product._id} data={product}/>
                        ))}
                    </div>
                </div>
                <div className="checkout">
                    <h3 className="section-title">Checkout</h3>
                    <div className="checkout-content">
                        <p>The time of delivery will vary depending on region</p>
                        <h3 className="total">Total: <span className="total-highlight">${String(getTotal())}</span></h3>
                        <button className="btn-pay">Proceed with payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;