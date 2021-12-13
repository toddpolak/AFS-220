import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CartItems from '../components/CartItems'

export default function Cart() {

    const [cartMsg, setCartMsg] = useState('')

    const location = useLocation()

    useEffect(() => {
        if(location.state) {
            setCartMsg(`Added: ${location.state.item} to your cart.`)
        }
    }, [])

    return (
        <div id="body">
            <div class="content">
                <div class="body cart-page">
                    <h3>CART</h3>
                    <span className='cart-added-msg'>{cartMsg}</span>
                    <CartItems />
                </div>
            </div>
        </div>
    )
}
