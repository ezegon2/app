import { useEffect, useState } from "react"
import customFetch from "./customFetch";
import products from "./Products";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [Item, setItem] = useState([]);
    useEffect (() => {
        customFetch(3000,products)
        .then(resultado => setItem(resultado))
    },[Item])
    return (
        <div>
            <ItemList products={Item} />
        </div>
    )
    
}


export default ItemListContainer 