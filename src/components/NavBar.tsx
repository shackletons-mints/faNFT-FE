import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../assets/fanft_logo.svg'
import contract from '../assets/contract.svg'
import home from '../assets/home.svg'
import money from '../assets/money.svg'

const NavBar = () => {
    return (
        <ul id='nav-bar'>
            <span id='nav-title'>Double Dragon Crypto</span>
            <li>
                <Link to='/' className='nav-link'>
                    <img src={home}/>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to='/lottery' className='nav-link'>
                    <img src={money}/>
                    <span>Lottery</span>
                </Link>
            </li>
            <li>
                <Link to='/fanFT' className='nav-link'>
                    <img src={logo}/>
                    <span>fanFT</span>
                </Link>
            </li>
            <li>
                <Link to='/contract' className='nav-link'>
                    <img src={contract}/>
                    <span>Contract</span>
                </Link>
            </li>
        </ul>
    )
}

export default NavBar