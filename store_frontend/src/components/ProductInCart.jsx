import "./ProductInCart.css";

const ProductInCart = (props) => {
    return(
        <div className="productInCart">
            <div className="left-container">
                <img src={"/images/"+props.data.image} alt={props.data.image} />
            </div>
            <div className="mid-container">
                <h3 className="title">{props.data.title}</h3>
                <p className="category">{props.data.category}</p>
                <p className="quantity">Quantity: {props.data.quantity}</p>
            </div>
            <div className="right-container">
                <p className="price">${(props.data.price).toFixed(2)}</p>
                <h3 className="subtotal">${(props.data.price * props.data.quantity).toFixed(2)}</h3>
            </div>
            <div className="delete-container">
                <button className="btn-delete">X</button>
            </div>
        </div>
    )
};

export default ProductInCart;