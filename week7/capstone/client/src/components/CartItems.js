import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import CartItem from "./CartItem"

export default function CartItems() {
    const { items, cartMsg } = useContext(Context)

    function cartTotal() {
        let cartTotal = 0

        if (items && items.length !== 0) {
            items.forEach(item => {
                cartTotal += item.price
            });
        }
        return `$${Math.round(cartTotal * 100) / 100}`
    }

    return (
        <>
            <div className='section'>
                <span className='cart-msg'>{cartMsg}</span>
                {items.length > 0 ?
                    items.map((item, index) => {
                        return <CartItem item={item} key={index} />
                    })
                : <li>No items in cart</li>
                }
            </div>
            <div className='aside cart-total'>
                Sub Total: {cartTotal()}
            </div>
        </>
    )
}
