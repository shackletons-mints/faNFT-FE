import twitter from "../assets/twitter.svg"
import yingyang from "../assets/yingYang.svg"

import './Footer.css'

const Footer = () => {

    return (
        <div id="footer">
            <div className='logo-container'>
                <img className='logo-footer' src={yingyang} />
            </div>
        </div>
    )
}

export default Footer
