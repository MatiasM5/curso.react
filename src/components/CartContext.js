

import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ]);
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = () => {
        setCartList([]);
    }

    

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;