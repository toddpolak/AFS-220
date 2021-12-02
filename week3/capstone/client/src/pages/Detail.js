import Description from "../components/Description"
import { useLocation } from 'react-router-dom'

export default function Detail() {

    const location = useLocation()
    const { item } = location.state

    return (
        <div id="body">
            <div class="content">
                <div class="body">
                    <h2>{item.item}</h2>
                    <div className='section'>
                   
                        <h4>{item.description}</h4>
               
                        <img src={`/images/${item.image}`} alt='' />

                    </div>

                    <div className='aside'>
                        <div className='add_to_cart_wrapper'>
                            <span className='add_to_cart'>Add to Cart</span>
                            <span className="detail_price">${item.price}</span>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
