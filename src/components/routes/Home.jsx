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
import logo from './../../assets/ddragonLogo.svg'
import ether from './../../assets/ether.svg'
import next from './../../assets/next.svg'
import previous from './../../assets/previous.svg'
import fan_mp4_three from './../../assets/THREE.mp4'
import yingYang from './../../assets/yingyang.svg'

import './Home.css'

// [1000 cids]

// 'directorCid.../{title}'

// TODO
// FIND FALLBACK IMAGE AND APPLY THAT BELOW

// https://bafybeia72cm2r3nu22vuyypaptkjcn7q25mtkglk65g4rfbecygzot6q3y.ipfs.nftstorage.link/0000000000000000000000000000000000000000000000000000000000000985.json

// let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + nftId.toString(16)).substr("-64");

const Home = ({ setCurrentAccount, currentAccount }) => {
    let startDisplayIdx = 0
    let endDisplayIdx = 3

    const [displayedNfts, setDisplayedNfts] = useState([])

    let nftMetadata = {}
    const hexBase = "0000000000000000000000000000000000000000000000000000000000000000"
    const [metadataId, setMetadataId] = useState(1)

    const getNftsMetadata = () => {

        let nftMetadataForDisplay = []

        for (let i = metadataId; i < (metadataId + 3); i++) {
            let paddedHex = (hexBase + i.toString(16)).substr("-64")
            let nftMetadata

            const config = {
                method: 'get',
                url: `https://bafybeia72cm2r3nu22vuyypaptkjcn7q25mtkglk65g4rfbecygzot6q3y.ipfs.nftstorage.link/${paddedHex}.json`,
            }

            axios(config)
                .then(response => {
                    nftMetadata = JSON.stringify(response.data)
                    nftMetadataForDisplay.push(JSON.parse(nftMetadata))
                })
                .catch(error => {
                    console.error(error)
                })
        }

        return nftMetadataForDisplay
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        setDisplayedNfts(getNftsMetadata())
    }, [])

    useEffect(async () => {
        setDisplayedNfts(getNftsMetadata())

    }, [metadataId])

    const handleClickNext = () => {
        if (metadataId + 3 > 1000) {
            setMetadataId((metadataId + 3) % 1000)
            return
        }
        setMetadataId(metadataId + 3)
    }

    const handleClickPrevious = () => {
        if (metadataId - 3 < 1) {
            setMetadataId((metadataId - 3) + 1000)
            return
        }
        setMetadataId(metadataId - 3)
    }

    const renderText = (textFile) => {

        const [aboutUs] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                <div id='aboutUs' className='about-us-container'>
                    <div className='about-us-left'>


                    </div>
                    <div className='about-us-right'>
                        <div className='about-us-text reveal-text'>
                            Buy A Fan
                        </div>
                    </div>
                </div>

                <div className='faq-container' style={{ height: '1200px' }}>
                    <div className='nft-display-container'>
                        <img className='previous-button' src={previous} onClick={handleClickPrevious} />
                        {
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

                <div className='faq-container-bottom' style={{ height: '1500px' }}>

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
