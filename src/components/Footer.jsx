import twitter from "../assets/twitter.svg"
import logo from "../assets/ddragonNoBG.png"

import './Footer.css'

const Footer = () => {

    return (
        <div id="footer">
            <div className='social-container'>
                <p className='follow-us'>Follow us on</p>
                <img className="twitter" src={twitter} />
            </div>
            <div className='logo-container'>
                <img className='logo-footer' src={logo} />
            </div>
        </div>
    )
}

export default Footer
