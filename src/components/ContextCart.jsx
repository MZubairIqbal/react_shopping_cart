import React, { useState } from 'react'
import { Products } from './Products'

function ContextCart() {
    const [items, setItems] = useState(Products);
    return (
        <>
            <header className="s-header">
                <div className="header-start">
                    <img src="./images/arrow.png" alt="Arrow Loading..." className='header-arrow' />
                    <a href="#"><h2 className='header-logo'>Continue Shopping</h2></a>
                </div>
                <div className="header-end">
                    <img src="./images/cart.png" alt="Cart Loading..." />
                    <div className="cart-counter">{items.length}</div>
                </div>
            </header>
            {/* Header's MarkUp End  */}
            <section className="items-box">
                <div className="box-head">
                    <h3 className="box-heading">Shopping Cart</h3>
                    <p className="box-para">you have <span>{items.length}</span> items in the Cart.</p>
                </div>
                {/* <Items products={Products} /> */}
                <Items />
                <div className="box-price">Cart Total: <span>{totalPrice}</span></div>
            </section>
        </>
    )
}

export default ContextCart