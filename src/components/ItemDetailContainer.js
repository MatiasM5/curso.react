import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail';
import {firestoreFetchOne} from "../utils/firestoreFetch.js";



const ItemDetailContainer = () => {
    const [dato, setdato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setdato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;