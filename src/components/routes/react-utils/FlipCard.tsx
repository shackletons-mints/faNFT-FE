import react from 'react'
import './FlipCard.css'

interface FlipCardProps {
    title?: string
    text?: string
    linkText?: string 
    href?: string
}

const FlipCard: React.FC<FlipCardProps> = ({ title, text, linkText, href }) => {
    return (
        <div>
            <div className='container'>
                <div className='inside'>
                    <div className='front'>
                        <h2 className='display-3'>{title}</h2>
                    </div>
                    <div className='back'>
                        <p className="lead text">{text}
                        {href !== undefined && 
                            <a href={href} target='_blank'> {linkText}</a>
                        }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard