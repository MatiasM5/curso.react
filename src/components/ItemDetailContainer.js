import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const { products } = require('../utils/products')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const docRef = doc(db, "produtos", idItem);
        const dataFromFirestore = async () => {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());
            let result = {
                id: idItem,
                ...docSnap.data()
            }
            return(result);
        } else {
  
        console.log("Documento no encontrado");
        }
    }
    dataFromFirestore()
    .then(result => setDato(result))
    .catch(err => console.log(err));


    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;