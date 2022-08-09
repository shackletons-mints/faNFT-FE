import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './NFTdisplay.css'

import NFTSquare from './NFTSquare'

const NFTdisplay = ({ currentAccount, setCurrentAccount }) => {
    const [nftCollection, setNftCollection] = useState([])
    const [displayedGifs, setDisplayedGifs] = useState([1, 15, 25])

    useEffect(() => {
        getMetadata(displayedGifs)

    }, [])

    useEffect(() => {
        getMetadata(displayedGifs)
    }, [displayedGifs])

    // const getThreeRandomGifs = () => {
    //     const theChosenThree = []
    //     const randomNumGeneration = () => {
    //         return Math.floor(Math.random() * 25) + 1
    //     }

    //     for (let i = 0; i < 3; i++) {
    //         // TODO CHECK FOR AMOUNT OF GIFS HERE
    //         let newIdx = randomNumGeneration()
    //         while (theChosenThree.indexOf(newIdx) > -1 && displayedGifs.indexOf(newIdx) > -1) {
    //             newIdx = randomNumGeneration()
    //         }
    //         theChosenThree.push(newIdx)
    //     }

    //     return theChosenThree
    // }

    // // TODO: verify that we have gif before tryign to render it
    // const getMetadata = async (gifsWeWant) => {
    //     const nftCollector = []

    //     for (let i = 0; i < gifsWeWant.length; i++) {
    //         const config = {
    //             headers: {
    //                 // 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json',
    //                 // 'Access-Control-Allow-Credentials': true,
    //             }
    //         }
    //         const paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + gifsWeWant[i].toString(10)).substr(-64)
    //         const nftMetadata = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVF3uM9BnffDMfPoeADuYfvXcjvW8wHr8eHRxphpV9C7J/${paddedHex}.json`, config)

    //         nftCollector.push(nftMetadata.data)
    //     }
    //     setNftCollection(nftCollector)
    // }

    // const handleShowMore = () => {
    //     const newGifs = getThreeRandomGifs()
    //     setDisplayedGifs([...displayedGifs, ...newGifs])
    // }

    // const handleNFTDisplay = (collection) =>
    //     collection.map((nft, idx) => {
    //         return (
    //             <div key={idx} className='nft-card'>
    //                 <NFTSquare
    //                     nftMetadata={nft}
    //                     currentAccount={currentAccount}
    //                     setCurrentAccount={setCurrentAccount}
    //                 />
    //             </div>
    //         )
    //     })

    return (
        <div>

            <div id='nft-container'>
                {nftCollection.length > 0 && handleNFTDisplay(nftCollection)}

                <button id='show-more' className='hover-effect' onClick={handleShowMore}>
                    Show More
                </button>

            </div>
        </div>
    )
}

export default NFTdisplay
