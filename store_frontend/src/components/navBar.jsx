import './navBar.css';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import StoreContext from '../store/storeContext';

const NavBar = () => {
    const cart = useContext(StoreContext).cart;

    const getCartCount = () => {
        let count = 0;

        for(let i=0; i<cart.length; i++){
            count += cart[i].quantity;
        }
        return count;
    }
    
    return (
        <div className='navbar'>
            <div className="brand">
                <img src="/images/onlinestore_logo.png" alt="logo" width={40} height={40}/>
                <h5>Stelo</h5>
            </div>
            <div className="links">
                <nav>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/catalog">Store</Link>
                    <Link className='link' to="/list">My List</Link>
                    <Link className='link' to="/about">About</Link>
                    <Link className='link' to="/admin">Admin</Link>
                    <Link className='btn-link' to="/cart">Cart</Link>
                    <span className='cart-count'>{String(getCartCount())}</span>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;