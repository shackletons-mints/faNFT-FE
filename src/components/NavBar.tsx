import './NavBar.css'
import logo from '../assets/fanft_logo.svg'
import contract from '../assets/contract.svg'

const NavBar = () => {
    return (
        <ul id='nav-bar'>
            <li>
                <a className='nav-link'>
                    <img src={logo}/>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a className='nav-link'>
                    <img src={contract}/>
                    <span>Contract</span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar