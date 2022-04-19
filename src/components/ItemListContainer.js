import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;

/*const onAdd = (qty) => {
    alert("Has seleccionado " + qty + " items.");
}
const ItemListContainer = () => {
    return(
        <div>
            <h4>
                <p> App de React </p>
            </h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}*/
