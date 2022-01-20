//import { useEffect, useState } from 'react'
//import { useLocation } from 'react-router-dom'
import CartItems from '../components/CartItems'

export default function Cart() {
    return (
        <div id="body">
            <div className="content">
                <div className="body cart-page">
                    <h3>CART</h3>
                    <CartItems />
                </div>
            </div>
        </div>
    )
}
