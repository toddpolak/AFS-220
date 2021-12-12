import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Provider'

export default function CartNav() {
    const { items } = useContext(Context)

    //console.log('context: ', useContext(Context))
    //console.log('UserNav items: ', items.length)

    return (
        <>
            <div>
                <Link to='/cart'>{`CART (${items.length === 0 ? 'empty' : items.length})`}</Link>
            </div>
        </>
    )
}
