import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Provider'

export default function CartNav() {
    const { items, resetCartMsg } = useContext(Context)
    
    const existingEntries = localStorage.getItem('items')
    const emptyCart = (existingEntries === null) || (items && items.length === 0)

    return (
        <>
            <div>
                <Link to='/cart' onClick={() => resetCartMsg()}>
                    {`CART (${emptyCart ? 'empty' : items && items.length})`}
                </Link>
            </div>
        </>
    )
}
