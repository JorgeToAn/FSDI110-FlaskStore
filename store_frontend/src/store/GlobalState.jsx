import StoreContext from "./storeContext";
import {useState} from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});
    
    const addToCart = (product) => {
        let cartCopy = [...cart];
        let exists = false;
        
        // verifies if the product exists already, if so, updates the quantity
        for(let i=0; i<cart.length && !exists; i++){
            let cartProduct = cartCopy[i];
            if (product._id === cartProduct._id){
                cartProduct.quantity += product.quantity;
                exists = true;
                console.log("Updated quantity", cartProduct);
            }
        }

        // if not, add it to the cart
        if (!exists){
            console.log("Adding to cart", product);
            cartCopy.push(product);
        }

        setCart(cartCopy);
    };
    const removeFromCart = () => {};

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;