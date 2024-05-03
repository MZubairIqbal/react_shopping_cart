// This is Cart Context Provider 
import React, { useState } from 'react';
import ContextCart from './ContextCart';
import { Products } from './Products';
const CartContextProvider = ({ children }) => {
    // Global State ********
    const [goods, setGoods] = useState(Products);
    // remove Products Method ***********
    const removeCartProduct = (productID) => {
        console.log("you removed the item:", productID)
        setGoods(goods.filter((item) => item.id !== productID));
    }
    return (
        <ContextCart.Provider value={{ goods, setGoods, removeCartProduct }}>
            {children}
        </ContextCart.Provider >
    )
}

export default CartContextProvider