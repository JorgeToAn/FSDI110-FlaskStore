import "./ShoppingList.css";
import { useState } from "react";

const ShoppingList = () => {
    const [shoppingText, setShoppingText] = useState("");
    const [items, setItems] = useState([]);

    const textChange = (args) => {
        let value = args.target.value;
        setShoppingText(value);
    }

    const save = () => {
        let itemsCopy = [...items];
        itemsCopy.push(shoppingText);
        setItems(itemsCopy);
    };

    return(
        <div className="shoppingList">
            <h1>Shopping List</h1>

            <div className="form">
                <h3>Add the things you need to shop for!</h3>
                <input onChange={textChange} type="text" />
                <button onClick={save}>Add</button>
            </div>

            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;