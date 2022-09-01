import {createContext} from "react";

// context describes the data structure
// but doesn't provide implementation

const StoreContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {}
});

export default StoreContext;