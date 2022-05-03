import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
    }, [idCategory]);



    useEffect(()=> {
    return (()=> {
          setDatos([]);
    })
    }, []);
    

    return (
        <>
        <ItemList items={datos} />
        </>
        
    )
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
