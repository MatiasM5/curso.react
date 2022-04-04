import ItemCount from "../ItemCount";

const onAdd = (qty) => {
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
}

export default ItemListContainer;