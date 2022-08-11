import { Link } from "react-router-dom"
import './NavBar.css'
import ether from '../assets/ether.svg'

const NavBar = ({ navigationName, setNavigationName }) => {

    const handleClick = () => {
        topFunction()
        setNavigationName('Home')
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <ul id='nav-bar'>
            <li>
                <Link to='/' className='nav-link no-right'>
                    <span className='nav-text' onClick={handleClick}>{navigationName}</span>
                </Link>
            </li>
        </ul>
    )
}

export default NavBar
