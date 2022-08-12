import react from 'react'

import './Title.css'

const Title = ({ title, subtitle, details, border }) => {

        return (
            <div className='title-container'>
                { border && <div className='bottom-border'>&nbsp;</div> }
                { staticBorder && <div className='static-top-border'>&nbsp;</div> }
                <h1 className='display-1'>{ title }</h1>
                { subtitle && <h2 className=''>{ subtitle }</h2> }
                { details && <p className='details'>{ details }</p> }
                { border && <div className='top-border'>&nbsp;</div> }
                { staticBorder && <div className='static-bottom-border'>&nbsp;</div> }
            </div>
        )
    }


export default Title
