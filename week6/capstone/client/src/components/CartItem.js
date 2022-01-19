import { useContext } from 'react'
import { Context } from '../context/Provider'
import { Link } from 'react-router-dom'

export default function CartItem({item}) {
    const { deleteCartItem } = useContext(Context)

    function  handleDelete() {
        deleteCartItem(item)
    }

    return (
        <>
            <li className='odd'>
                <Link 
                    to='/detail' 
                    state={{item: item}}>
                        {item.item}
                </Link>
                <span className="cart-item-price">${item.price}</span>
                <span className="delete-cart-item" onClick={()=> handleDelete()}>Remove</span>
                <p>{item.description}</p>
                <img className='cart-page-image' src={`/images/${item.image}`} alt='' />
            </li>
        </>
    )
}
