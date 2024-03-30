import React from 'react'
import { Products } from './Products'
import './ShoppingCart.css'
function Items() {
    return (
        <>
            <div>This is the Items Component...</div>
            {/* {Products.map((item, index, array) => {
                    <img src={item.img} alt=" Image Loading..." />
                })} */}
            <div className="item-1 item">Item-1</div>
            <div className="item-2 item">Item-2</div>
            <div className="item-3 item">Item-3</div>
        </>
    )
}

export default Items