import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import CartItem from "./CartItem"

export default function CartItems() {
    const { items } = useContext(Context)

    console.log('items.length: ', items.length)

    return (

        <>
            <div className='section'>
                {items.length > 0 ?
                    items.map((item, index) => {
                        return <CartItem item={item} index={index} />
                    })
                : <li>No items in cart</li>
                }
                
            </div>

            <div className='aside'>
                Other Info..
            </div>

        </>

    )
}
