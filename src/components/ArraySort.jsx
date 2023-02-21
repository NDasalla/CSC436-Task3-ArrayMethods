import products from "./Products";
import { useState, useEffect } from "react";

const ArraySort = () => {

    const [newProducts, setNewProducts] = useState([]);

    // useEffect listens for changes and fires when a change is made

    useEffect(() => {
        sortProducts();
    }, [])

    const sortProducts = () => {

        products.sort((a, b) => a.price - b.price);
        setNewProducts(products.map(a => a.name));

    }

    return <div>

        <h1><b>Products By Ascending Price:</b></h1>
        <p>{newProducts.join(', ')}</p>
    
    </div>
}

export default ArraySort;