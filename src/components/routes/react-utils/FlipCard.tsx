import react from 'react'
import './FlipCard.css'

interface FlipCardProps {
    title?: string;
    text?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, text }) => {
    return (
        <div>
            <div className='container'>
                <div className='inside'>
                    <div className='front'>
                        <h2 className='display-2'>{title}</h2>
                    </div>
                    <div className='back'>
                        <p className="lead text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard