import React from 'react'
import Items from './Items'
import './ShoppingCart.css'

function ShoppingCart() {
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
                    <div className="cart-counter">10</div>
                </div>
            </header>
            {/* Header's MarkUp End  */}
            <section className="items-box">
                <div className="box-head">
                    <h3 className="box-heading">Shopping Cart</h3>
                    <p className="box-para">you have <span>10</span> items in the Cart.</p>
                </div>
                <Items className="items-container" />
                <div className="box-price">Cart Total: <span>5500$</span></div>
            </section>
        </>
    )
}

export default ShoppingCart