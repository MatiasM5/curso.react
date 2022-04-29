import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';



const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    useEffect(() => {
        const fetchFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return dataFromFirestore
        }
        fetchFromFirestore()
        .then(result => setDatos(result))
        .catch(err => console.log(err));
    }, [datos]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <ItemList items={datos}/>
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
