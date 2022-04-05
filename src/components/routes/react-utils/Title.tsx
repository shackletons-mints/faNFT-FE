import react from 'react'

import './Title.css'

interface TitleProps {
    title: string
    subtitle?: string
    details?: string
    border?: boolean
}

const Title: React.FC<TitleProps> = ({ title, subtitle, details, border }) => {

        return (
            <div className='title-container'>
                { border && <div className='top-border'>&nbsp;</div> }
                <h1 className='display-1'>{ title }</h1>
                { subtitle && <h2 className=''>{ subtitle }</h2> }
                { details && <p className='details'>{ details }</p> }
                { border && <div className='bottom-border'>&nbsp;</div> }
            </div>
        )
    } 


export default Title