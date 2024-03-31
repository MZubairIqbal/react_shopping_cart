import React, { createContext, useEffect, useState } from 'react'
import Items from './Items'
import './ShoppingCart.css'
import { Products } from './Products';
export const ShoppingCartContext = createContext();
function ShoppingCart() {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        calculatePrice();
    }, [])
    const calculatePrice = () => {

        const tPrice = Products.reduce((accumulator, currentprice) => {
            let integerValue = parseInt(currentprice.price);
            return accumulator + integerValue;
        }, 0);
        setTotalPrice(tPrice);
    }
    return (
        <>
            {/* <div>This is the ShoppingCart Component...</div> */}
            <header className="s-header">
                <div className="header-start">
                    <img src="./images/arrow.png" alt="Arrow Loading..." className='header-arrow' />
                    <a href="#"><h2 className='header-logo'>Continue Shopping</h2></a>
                </div>
                <div className="header-end">
                    <img src="./images/cart.png" alt="Cart Loading..." />
                    <div className="cart-counter">{Products.length}</div>
                </div>
            </header>
            {/* Header's MarkUp End  */}
            <section className="items-box">
                <div className="box-head">
                    <h3 className="box-heading">Shopping Cart</h3>
                    <p className="box-para">you have <span>{Products.length}</span> items in the Cart.</p>
                </div>
                {/* <Items products={Products} /> */}
                <Items />
                <div className="box-price">Cart Total: <span>{totalPrice}</span></div>
            </section>
        </>
    )
}

export default ShoppingCart