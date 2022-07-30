import React, { useState, useEffect } from 'react'
import axios from 'axios'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'


import logo from './../../assets/ddragonLogo.svg'
import fanft from './../../assets/dragon-2.svg'
import ether from './../../assets/ether.svg'
import fan_mp4_one from './../../assets/ONE.mp4'
import fan_mp4_two from './../../assets/display_mp4_two.mp4'
import fan_mp4_three from './../../assets/THREE.mp4'

import './Home.css'

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

    const renderText = (textFile) => {

        const [aboutUs] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                <div id='aboutUs' className='about-us-container'>
                    <div className='about-us-left'>
                        <h1 className='about-us-title reveal'>{aboutUs.title}</h1>
                        <img className='about-us-logo reveal' src={logo} />
                    </div>
                    <div className='about-us-right'>
                        <div className='about-us-text reveal-text'>{aboutUs.text}</div>
                    </div>
                </div>

                <div className='about-fanft-container'>
                    <div className='about-fanft-left'>
                        <div className='about-fanft-text'>
                            A set of 1000 three-dimensional fans featuring classic asian art pieces.
                            Fans were generated using threeJS and javascript. <br></br>
                        </div>
                    </div>
                    <div className='about-fanft-right'>
                        <h1 className='about-fanft-title'>faNFT</h1>
                        <img className='about-fanft-logo reveal-right' src={fanft} />
                    </div>
                </div>

                <div className='fan-display-container'>
                    <div className='fan-card-container'>
                        <video className='fan-img' src={fan_mp4_one} autoPlay muted loop></video>
                        <p className='test-hello'>faNFT#001</p>
                    </div>
                    <div className='fan-card-container'>
                        <video className='fan-img' src={fan_mp4_two} autoPlay muted loop></video>
                        <p className='test-hello'>hello</p>
                    </div>
                    <div className='fan-card-container'>
                        <video className='fan-img' src={fan_mp4_three} autoPlay muted loop></video>
                        <p className='test-hello'>hello</p>
                    </div>

                </div>

                <div className='faq-container' style={{ height: '1000px' }}>

                    <div>
                        <h1 className='faq-title'>
                            Frequently Asked Questions
                        </h1>
                    </div>

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
            <div className='title-container'>
                <h1 className='main-title'>Double Dragon <br></br>Crypto</h1>
                <img className='title-logo' src={ether} />
            </div>

            {/* <Title
                title={mainTitle.title}
                border={true}
                details={mainTitle.caption}
            /> */}

            {renderText(homeText)}
        </div>
    )
}

export default Home
