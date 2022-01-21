import { useContext } from 'react'
import { Context } from '../context/Provider'
import Item from '../components/Item'

export default function FoodItems() {
    const { food } = useContext(Context)
    const foodLeft = food.slice(0,3)
    const foodRight = food.slice(3)
    
    return (
        <>
            <ul className='section'>
                <li className='odd'>
                    <ul>
                        {foodLeft.map((item, index) => 
                            <Item item={item} key={index} />
                        )}
                    </ul>
                </li>
                <li>
                    <ul>
                        {foodRight.map((item, index) => 
                            <Item item={item} key={index} />
                        )}
                    </ul>
                </li>
            </ul>
        </>
    )
}
