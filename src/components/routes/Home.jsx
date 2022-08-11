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

    let nftMetadata = {}
    const hexBase = "0000000000000000000000000000000000000000000000000000000000000000"
    const [metadataId, setMetadataId] = useState(1)

    const getNftsMetadata = () => {

        let nftMetadataForDisplay = []

        for (let i = metadataId; i < (metadataId + 333); i += 111) {
            let id = i
            if (id > 1000) {
                id -= 1000
            } else if (id < 0) {
                id = 1 % 1000
            }

            let paddedHex = (hexBase + id.toString(10)).substr("-64")

            const config = {
                method: 'get',
                url: `https://bafybeia72cm2r3nu22vuyypaptkjcn7q25mtkglk65g4rfbecygzot6q3y.ipfs.nftstorage.link/${paddedHex}.json`,
            }

            let nftMetadata = axios(config)
            nftMetadataForDisplay.push(nftMetadata)
        }

        Promise.all(nftMetadataForDisplay)
            .then(response => {
                setDisplayedNfts(response.map(res => res.data))
            }).catch(err => console.error(err))

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
        if (metadataId + 1 > 1000) {
            setMetadataId((metadataId + 1) % 1000)
            return
        }

        setMetadataId(metadataId + 1)
    }

    const handleClickPrevious = () => {
        if ((metadataId - 1) < 1) {
            let result = (metadataId - 1) + 1000
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
