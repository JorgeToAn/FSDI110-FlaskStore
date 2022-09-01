import "./Catalog.css";
import Product from "./Product";
import DataService from "../services/dataService";
import { useEffect } from "react";
import { useState } from "react";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadData = async () => {
        let service = new DataService();
        let prods = await service.getCatalog();
        setProducts(prods);

        let uniques = [];
        for (let i = 0; i < prods.length; i++) {
            let prod = prods[i];
            // if the category does NOT exist in the uniques array, add it
            if (!uniques.includes(prod.category)) {
                uniques.push(prod.category);
            }
        }
        setCategories(uniques);
    };

    useEffect(() => {
        loadData();
    }, []);
    
    return(
        <div className="catalog">
            <h1>Catalog</h1>
            <div className="categories">
                {categories.map((category) => (
                    <button key={category}>{category}</button>
                ))}
            </div>

            <div className="product-list">
                {products.map((product) => (
                    <Product key={product._id}  data={product}/>
                ))}
            </div>
        </div>
    );
}

export default Catalog;