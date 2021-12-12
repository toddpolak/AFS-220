import { useEffect, useState, useContext } from 'react'
import { Context } from '../context/Provider'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Cart() {

    const [cartMsg, setCartMsg] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    //console.log('location: ', location)

    useEffect(() => {
        if(location.state) {
            setCartMsg(`Added: ${location.state.item} to your cart.`)
        }
    }, [])

    return (
        <div id="body">
            <div class="content">
                <div class="body">
                    <h3>CART</h3>
                    {cartMsg}
                </div>
            </div>
        </div>
    )
}
