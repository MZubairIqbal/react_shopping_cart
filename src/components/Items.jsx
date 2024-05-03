import React, { useContext, useEffect, useState } from 'react';
import './ShoppingCart.css';
import { Products } from './Products';
import { Scrollbars } from 'react-custom-scrollbars';
import CartContext from './ContextCart';
function Items() {
    // const [items, setItems] = useState(products);
    let [itemQuantity, setItemQuantity] = useState({});
    const { goods, setGoods, removeCartProduct } = useContext(CartContext);

    // useEffect(() => {
    //     console.log(goods)
    // }, [])
    const handleIncrementQuantity = (productID) => {
        setItemQuantity(previousQuantity => ({
            ...previousQuantity,
            [productID]: (previousQuantity[productID] || 0) + 1
        }));
        // console.log("These are The Goods: ", goods);
    }
    const handleDecrementQuantity = (productID) => {
        setItemQuantity(previousQuantity => ({
            ...previousQuantity,
            [productID]: Math.max((previousQuantity[productID] || 0) - 1, 0)
        }));
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
                        goods.map((item, index, array) => {
                            return <div key={index} className="item-wraper">
                                <div className="img-box">
                                    <img src={item.img} alt="Product Image Loading..." />
                                </div>
                                <div className="detail-box">
                                    <h4 className="p-title">{item.title}</h4>
                                    <p className="p-color">{item.description}</p>
                                </div>
                                <div className="quantity-box">
                                    <img onClick={() => handleDecrementQuantity(item.id)} className='minus' src="./images/minus.png" alt="minus sign Loading..." />
                                    <input type="number" name="p-quantity" id={`product-num-${item.id}`} min="0" value={itemQuantity[item.id]} onChange={e => setItemQuantity(e.target.value)} />
                                    <img onClick={() => handleIncrementQuantity(item.id)} className='plus' src="./images/add.png" alt="Add sign Loading..." onChange={(e) => e.target.value} />
                                </div>
                                <div className="product-price-box">
                                    <p className="p-price">{item.price}$</p>
                                </div>
                                <div className="remove-box">
                                    <img onClick={() => removeCartProduct(item.id)} src="./images/delete.png" alt="Delete image Loading..." />
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