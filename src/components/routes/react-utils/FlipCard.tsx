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
                        <h2 className='display-2'>{title}</h2>
                    </div>
                    <div className='back'>
                        <p className="lead text">{text}</p>
                    </div>
                    {/* why the fuck isn't this working like I want it to? */}
                    {href && <a href={href}>{ linkText }</a>}
                </div>
            </div>
        </div>
    )
}

export default FlipCard