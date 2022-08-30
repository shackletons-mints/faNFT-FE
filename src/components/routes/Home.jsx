import React, { useState, useEffect } from 'react'
import axios from 'axios'

// data
import homeText from '../text/homeText.js'
import mockNfts from '../js-utils/_mockNfts'

// components
import FlipCard from './react-utils/FlipCard'
import FunctionalMint from './FunctionalMint'
import Title from './react-utils/Title'
import NFTSquare from './react-utils/NFTSquare'

//assets
import ether from './../../assets/ether.svg'
import next from './../../assets/next.svg'
import previous from './../../assets/previous.svg'

import './Home.css'

const Home = ({ setCurrentAccount, currentAccount }) => {
    let startDisplayIdx = 0
    let endDisplayIdx = 3

    const [displayedNfts, setDisplayedNfts] = useState([])
    const [derivedURLs, setDerivedURLs] = useState([])

    let nftMetadata = {}
    const hexBase = "0000000000000000000000000000000000000000000000000000000000000000"
    const [metadataId, setMetadataId] = useState(1)

    const getNftsMetadata = () => {

        let nftMetadataForDisplay = []
        let urlCollection = []

        for (let i = metadataId; i < (metadataId + 102); i += 34) {
            let id = i
            if (id > 500) {
                id -= 500
            } else if (id < 0) {
                id = 1 % 500
            }

            const paddedHex = (hexBase + id.toString(10)).substr("-64")
            const derivedURL = `https://bafybeiad4cjnorjvotfqx737c2aha2fuvg2rfo6bznio22vbw6iyuyqs7y.ipfs.nftstorage.link/${paddedHex}.json`


            const config = {
                method: 'get',
                url: derivedURL,
            }

            let nftMetadata = axios(config)
            nftMetadataForDisplay.push(nftMetadata)
            urlCollection.push(derivedURL)
        }

        Promise.all(nftMetadataForDisplay)
            .then(response => {
                setDisplayedNfts(response.map(res => res.data))
            }).catch(err => console.error(err))

        setDerivedURLs(urlCollection)
    }

    useEffect(async () => {
        window.scrollTo(0, 0)
        getNftsMetadata()
    }, [])

    useEffect(() => {
        getNftsMetadata()

    }, [metadataId])

    const handleClickNext = () => {
        console.log(metadataId)
        if (metadataId + 1 > 500) {
            setMetadataId((metadataId + 1) % 500)
            return
        }

        setMetadataId(metadataId + 1)
    }

    const handleClickPrevious = () => {
        if ((metadataId - 1) < 1) {
            let result = (metadataId - 1) + 500
            setMetadataId(result)
            return
        }

        setMetadataId(metadataId - 1)
    }

    const renderText = (textFile) => {

        const [aboutUs] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                    <div className='about-us-right'>
                        <div className='about-us-text reveal-text'>
                            Buy A Fan
                        </div>
                    </div>
                <div className='faq-container' style={{ height: '1200px' }}>
                    <div className='nft-display-container'>
                        <img className='previous-button' src={previous} onClick={handleClickPrevious} />
                        {displayedNfts.length > 0 &&
                            displayedNfts.map((nft, idx) =>
                                <NFTSquare
                                    key={idx}
                                    derivedURL={derivedURLs[idx]}
                                    nftMetadata={nft}
                                    currentAccount={currentAccount}
                                    setCurrentAccount={setCurrentAccount}
                                />
                            )
                        }

                        <img className='next-button' src={next} onClick={handleClickNext} />
                    </div>

                </div>

                <div className='faq-container-bottom'>

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
                <h1 className='main-title'>fanSHUI</h1>
                <img className='title-logo' src={ether} />
            </div>

            {renderText(homeText)}
        </div>
    )
}

export default Home
