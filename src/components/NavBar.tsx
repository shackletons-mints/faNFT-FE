import { Link } from "react-router-dom"
import './NavBar.css'
import logo from '../assets/logo.png'
import contract from '../assets/contract.svg'
import home from '../assets/home.svg'
import money from '../assets/money.svg'
import ether from '../assets/ether.svg'

const NavBar = () => {

    return (
        <ul id='nav-bar'>
            <li>
                <Link to='/' className='nav-link no-right'>
                    <img className='image' src={home}/>
                    <span className='nav-text'>Home</span>
                </Link>
            </li>
            <li>
                <Link to='/lottery' className='nav-link no-right'>
                    <img className='image' src={money}/>
                    <span className='nav-text'>Lottery</span>
                </Link>
            </li>
            <img className='logo-nav' src={logo} />
            <li>
                <Link to='/fanFT' className='nav-link no-right no-left'>
                    <img className='image' src={ether}/>
                    <span className='nav-text'>fanFT</span>
                </Link>
            </li>
            <li>
                <Link to='/contract' className='nav-link'>
                    <img className='image' src={contract}/>
                    <span className='nav-text'>Contract</span>
                </Link>
            </li>
        </ul>
    )
}

export default NavBar
