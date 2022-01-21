import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
    return (
        <>
            <li className={props.index === 2 ? 'last' : ''}>
                <h2>
                    <Link to='/detail' state={{item: props.item}}>{props.item.item}</Link>
                </h2>
                <span>${props.item.price}</span>
                <p>{props.item.description}</p>
            </li>
        </>
    )
}
