import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div id='footer'>
            <ul>
                <li className="first">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/food'>Menu</Link></li>
                        <li><Link to='/'>Beer</Link></li>
                    </ul>
                </li>
                <li>
                    <span>Follow us:</span> 
                    <Link to='/' className="facebook">&nbsp;</Link>
                    <Link to='/' className="twitter">&nbsp;</Link>
                </li>
            </ul>   
            <p>Copyright &copy; 2022 Web Dev Student</p>
        </div>
    )
}
