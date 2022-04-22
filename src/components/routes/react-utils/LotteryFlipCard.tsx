import React from 'react'

import './FlipCard.css'

interface LotteryFlipCardProps {
    title?: string
    text?: string[]
    linkText?: string
    href?: string
    src?: string
}

const LotteryFlipCard: React.FC<LotteryFlipCardProps> = ({ title, text, linkText, href, src }) => {
    return (
            <div className='container'>
                <div className='inside'>
                    <div className='front'>
                        {src && <img src={src} />}
                        <h2 className='display-3'>{title}</h2>
                    </div>
                    <div className='back'>
                        <ul className="flip-list">
                            {text?.map((blurb, idx) => (
                                <li key={idx}>{blurb}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default LotteryFlipCard
