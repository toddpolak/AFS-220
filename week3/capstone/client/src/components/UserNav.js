import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Provider'

export default function UserNav() {
    const { token, user, logout, cartItems } = useContext(Context)

    //console.log('cart item count: ', cartItems.length)

    console.log('useContext(Context): ', useContext(Context))

    return (
        <>
            {token ? 
                <>
                    <div className='welcome'>
                        Welcome {`${user.firstname}!`}
                    </div>
                    <div className='auth-display'>
                        <span>
                            <label className='link' onClick={logout}>Logout</label>
                        </span>
                        <span className='cart-detail'>
                            <label className='link'>{`Cart (${cartItems.length})`}</label>
                        </span>
                    </div>
                </>
                :
                <Link to='/login'>Login</Link>
            }
        </>
    )
}
