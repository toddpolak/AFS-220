//import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Context } from '../context/Provider'

export default function Description({item}) {

   const { token, addToCart } = useContext(Context)

   const navigate = useNavigate()
   const location = useLocation()

    function handleAdd() {

        console.log('location: ', location)
        console.log('token: ', token)

        if(!token) {
            navigate('/login', {state: item})
        }
        addToCart(item)
    }

    return (
        <>
            <h2>{item.item}</h2>
            <div className='section'>
                <h4>{item.description}</h4>

                <div className='detail-image'>
                    <img src={`/images/${item.image}`} alt='' />
                </div>
                
            </div>
            <div className='aside'>
                <div className='add-to-cart-wrapper'>

                    <span 
                        className='add-to-cart'
                        onClick={()=> handleAdd()}>Add to Cart</span>

                    <span className="detail-price">${item.price}</span>
                </div>

                <div>
                    Add to cart msg
                </div>

            </div> 
        </>
    )
}
