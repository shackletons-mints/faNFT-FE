import react from 'react'
import './StaticCard.css'

const StaticCard = ({ title, text }) => {
    return (
        <div className='static-card-container'>
            <h2 className='static-card-display-3'>{title}</h2>
            <p className="static-card-text">{text}</p>
        </div>
    )
}

export default StaticCard