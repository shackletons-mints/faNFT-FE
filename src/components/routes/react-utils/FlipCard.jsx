import React from 'react'

import './FlipCard.css'

const FlipCard = ({ title, text, linkText, href, src }) => {
    return (
            <div className='container'>
                <div className='inside'>
                    <div className='front'>
                        {src && <img src={src} />}
                        <h2 className='display-3'>{title}</h2>
                    </div>
                    <div className='back'>
                        <p className="lead text">{text}
                            {href !== undefined &&
                                <a className='link' href={href} target='_blank'> {linkText}</a>
                            }
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default FlipCard
