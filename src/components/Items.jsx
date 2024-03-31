import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import { Products } from './Products';
import { Scrollbars } from 'react-custom-scrollbars';
function Items() {
    // const [items, setItems] = useState(products);
    let [itemQuantity, setItemQuantity] = useState(0);
    // const handleQuantity = () => {

    const handleIncrementQuantity = () => {
        setItemQuantity((previousQuantity) => previousQuantity + 1);
    }
    const handleDecrementQuantity = () => {
        setItemQuantity((previousQuantity) => previousQuantity - 1);
    }
    // }
    useEffect(() => {
        console.log(itemQuantity)
    }, [itemQuantity])
    return (
        <>
            <div className="items-container">
                <Scrollbars>
                    {
                        Products.map((item, index, array) => {
                            return <div key={index} className="item-wraper">
                                <div className="img-box">
                                    <img src={item.img} alt="Product Image Loading..." />
                                </div>
                                <div className="detail-box">
                                    <h4 className="p-title">{item.title}</h4>
                                    <p className="p-color">{item.description}</p>
                                </div>
                                <div className="quantity-box">
                                    <img onClick={handleDecrementQuantity} className='minus' src="./images/minus.png" alt="minus sign Loading..." />
                                    <input type="number" name="p-quantity" id="product-num" min="0" value={itemQuantity} />
                                    <img onClick={handleIncrementQuantity} className='plus' src="./images/add.png" alt="Add sign Loading..." onChange={(e) => e.target.value} />
                                </div>
                                <div className="product-price-box">
                                    <p className="p-price">{item.price}$</p>
                                </div>
                                <div className="remove-box">
                                    <img src="./images/delete.png" alt="Delete image Loading..." />
                                </div>
                            </div>
                        })
                    }
                </Scrollbars >
            </div >
        </>
    )
}

export default Items