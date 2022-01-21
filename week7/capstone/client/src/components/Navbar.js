import { useLocation, Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import logo2 from '../images/logo2.jpg'
import UserNav from './UserNav'
import CartNav from './CartNav'

export default function Navbar() {
    const location = useLocation()

    return (
        <>
            <ul className="navigation">
                <li>
                    <Link to='/food'>OUR FOOD</Link>
                </li>
                <li>
                    <Link to='/drinks'>DRINKS</Link>
                </li>
            </ul>
            <Link to='/' id='logo'>
                <img src={location.pathname === '/' ? logo : logo2} width="276" height="203" alt="" />
            </Link>
            <ul id="navigation">
                <li>
                    <UserNav />
                </li>
                <li>
                    <CartNav />
                </li>
            </ul>
        </>
    )
}
