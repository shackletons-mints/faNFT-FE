import React, { useState, useEffect } from 'react'
import axios from 'axios'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'


import logo from './../../assets/logo.png'
import fanft from './../../assets/dragon-2.svg'
import fan_img from './../../assets/fan_test_img.png'

import './Home.css'

interface Text {
    title?: string
    text?: string
    linkText?: string
    href?: string
    src?: string
}

const Home = ({ setCurrentAccount, currentAccount }) => {

    let nftMetadata = {}

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const mainTitle = {
        title: 'Double Dragon Crypto',
        caption: 'Awesome tagline about us here',
        subtitle: 'Bodacious subtitle',
    }

    const renderText = (textFile: Text[]) => {

        const [aboutUs] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                <div className='about-us-container'>
                    <div className='about-us-left'>
                        <h1 className='about-us-title'>{aboutUs.title}</h1>
                        <img className='about-us-logo reveal' src={logo} />
                    </div>
                    <div className='about-us-right'>
                        <div className='about-us-text'>{aboutUs.text}</div>
                    </div>
                </div>

                <div className='about-fanft-container'>
                    <div className='about-fanft-left'>
                        <div className='about-fanft-text'>{aboutUs.text}</div>
                    </div>
                    <div className='about-fanft-right'>
                        <h1 className='about-fanft-title'>faNFT</h1>
                        <img className='about-fanft-logo reveal-right' src={fanft} />
                    </div>
                </div>

                <div className='fan-display-container'>
                    <div className='fan-card-container'>
                        <img className='fan-img' src={fan_img} />
                        <p className='test-hello'>hello</p>
                    </div>
                    <div className='fan-card-container'>
                        <p className='test-hello'>hello</p>
                    </div>
                    <div className='fan-card-container'>
                        <p className='test-hello'>hello</p>
                    </div>

                </div>


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
