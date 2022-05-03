
import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if(found === undefined) {
            setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                costItem: item.cost,
                qtyItem: qty
            }
            
           ]);
        } else {
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
        
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem, calcTotal, calcTotalPorItem, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;