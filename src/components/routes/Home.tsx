import React, { useState, useEffect } from 'react'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'

interface Text {
    title?: string
    text?: string
    linkText?: string
    href?: string
    src?: string
}

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const mainTitle = {
        title: 'Double Dragon Crypto',
        caption: 'Awesome tagline about us here',
        subtitle: 'Bodacious subtitle',
    }

    const renderText = (textFile: Text[]) => {

        const [ aboutUs ] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                <FlipCard
                    title={aboutUs.title}
                    text={aboutUs.text}
                    src={aboutUs.src}
                />

                <div className='faq-container' style={{ height: '1000px' }}>

                    <Title
                        title='FAQ'
                    />

                    <div className='card-container'
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            flexBasis: 'auto',
                            flexWrap: 'wrap',
                            gap: '20px 20px'
                        }}
                    >

                        {textFile.filter(obj => obj.title !== 'About Us').map((card, idx) => (
                            < FlipCard
                                key={idx}
                                title={card?.title}
                                text={card?.text}
                                src={card?.src}
                                linkText={card?.linkText}
                                href={card?.href}
                            />
                        ))}

                    </div>

                </div>
            </>
        )
    }

    return (
        <div>

            <Title
                title={mainTitle.title}
                border={true}
                details={mainTitle.caption}
            />

            {renderText(homeText)}
        </div>
    )
}

export default Home
