import './App.css';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Catalog from './components/Catalog';
import ShoppingList from './components/ShoppingList';
import Home from './components/Home';
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import GlobalState from './store/GlobalState';

import {BrowserRouter, Routes, Route} from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar/>

          <div className='main'>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/catalog" element={<Catalog/>} />
              <Route path="/about" element={<AboutMe/>} />
              <Route path="/list" element={<ShoppingList/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </div>

          <Footer/>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
