import { useContext } from 'react'
import { Context } from '../context/Provider'
import Item from '../components/Item'

export default function DrinkItems() {
    const { drinks } = useContext(Context)
    const drinksLeft = drinks.slice(0,3)
    const drinksRight = drinks.slice(3)

    console.log(drinks)

    return (
        <>
            <ul className='section'>
                <li className='odd'>
                    <ul>
                        {drinksLeft.map((item, index) => 
                            <Item item={item} key={index} />
                        )}
                    </ul>
                </li>
                <li>
                    <ul>
                        {drinksRight.map((item, index) => 
                            <Item item={item} key={index} />
                        )}
                    </ul>
                </li>
            </ul>
        </>
    )
}
