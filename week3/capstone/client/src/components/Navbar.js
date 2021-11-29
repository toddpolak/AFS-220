import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import logo from '../images/logo.jpg'
import logo2 from '../images/logo2.jpg'

export default function Navbar() {

    const location = useLocation()
    const { token, user, logout } = useContext(UserContext)

    return (
        <>
            <ul className="navigation">
                <li>
                    <a href="food.html">OUR FOOD</a>
                </li>
                <li>
                    <a href="beer.html">OUR BEER</a>
                </li>
            </ul>
            <a id="logo" href="index.html">
                <img src={location.pathname === '/' ? logo : logo2} width="276" height="203" alt="" />
            </a>
            <ul id="navigation">
                <li>
                    {token ? 
                        <>
                            <div className='welcome'>
                                Welcome {`${user.firstname}!`}
                            </div>
                            <div className='welcome'>
                                <label className='link' onClick={logout}>Logout</label>
                            </div>
                        </>
                        :
                        <Link to='/login'>Login</Link>
                    }
                </li>
            </ul>
        </>
    )
}
