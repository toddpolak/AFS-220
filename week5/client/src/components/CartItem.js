import { Link } from 'react-router-dom'

export default function CartItem({item}) {

    console.log('props.item: ', item)

    return (
        <>
            <li className='odd'>
                
                <Link 
                    to='/detail' 
                    state={{item: item}}>
                        {item.item}
                </Link>
                (Quantity / Delete)
                <span>${item.price}</span>
                <p>{item.description}</p>
                <img className='cart-page-image' src={`/images/${item.image}`} alt='' />
                
            </li>
        </>
    )
}
