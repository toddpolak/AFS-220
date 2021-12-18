import { useContext } from 'react'
import { Context } from '../context/Provider'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Description({item}) {

   const { addToCart } = useContext(Context)

   const navigate = useNavigate()
   const location = useLocation()

   console.log('location: ', location)

    function handleAdd() {

        addToCart(item)

        navigate('/cart', {state: item, replace: false})

        // !token 

        //     ? navigate('/login', {state: 
        //         {redirect: '/food', 
        //         action: 'addToCart', 
        //         data: item}, 
        //         replace: false})

        //     : addToCart(item)
            
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
                <div className='add-to-cart-wrapper'
                    onClick={()=> handleAdd()}>
                    <span className='add-to-cart'>Add to Cart</span>
                    <span className="detail-price">${item.price}</span>
                </div>
            </div> 
        </>
    )
}
