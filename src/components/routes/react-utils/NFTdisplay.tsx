import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './NFTdisplay.css'
import { Watch } from 'react-loader-spinner'

import NFTSquare from './NFTSquare'
import MintButton from './MintButton'

interface NFTdisplayProps {
    currentAccount?: string;
    setCurrentAccount?: Function;
}

interface Property {
    name?: string
    value?: string
    display_type?: string
}

interface Properties {
    Leaf?: Property
    Handle?: Property
    Particle?: Property
}

interface NFTmetadata {
    image?: string
    name?: string
    description?: string
    properties?: Properties
}

const NFTdisplay: React.FC<NFTdisplayProps> = ({ currentAccount, setCurrentAccount }) => {
    const [nftCollection, setNftCollection] = useState([])
    const [displayedGifs, setDisplayedGifs] = useState([1, 15, 25])

    useEffect(() => {
        const getMetadata = async (gifsWeWant: number[]) => {
            const nftCollector = []
    
            for (let i = 0; i < gifsWeWant.length; i++) {
                const config = {
                    headers: {
                        // 'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        // 'Access-Control-Allow-Credentials': true,
                    }
                }
                const paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + gifsWeWant[i].toString(10)).substr(-64)
                const nftMetadata = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVF3uM9BnffDMfPoeADuYfvXcjvW8wHr8eHRxphpV9C7J/${paddedHex}.json`, config)
                nftCollector.push(nftMetadata.data)
            }
            setNftCollection(nftCollector)
        }
    
        getMetadata(displayedGifs)
    }, [])

    useEffect(() => {

        const getMetadata = async (gifsWeWant: number[]) => {
            const nftCollector = []
    
            for (let i = 0; i < gifsWeWant.length; i++) {
                const config = {
                    headers: {
                        // 'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        // 'Access-Control-Allow-Credentials': true,
                    }
                }
                const paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + gifsWeWant[i].toString(10)).substr(-64)
                const nftMetadata = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVF3uM9BnffDMfPoeADuYfvXcjvW8wHr8eHRxphpV9C7J/${paddedHex}.json`, config)
                nftCollector.push(nftMetadata.data)
            }
            setNftCollection(nftCollector)
        }


        getMetadata(displayedGifs)
    }, [displayedGifs])

    const handleShowDiffNFTs = () => {
        const newGifs = getThreeRandomGifs()
        setDisplayedGifs(newGifs)
    }

    const getThreeRandomGifs = () => {
        const theChosenThree = []
        const randomNumGeneration = () => {
            return Math.floor(Math.random() * 25) + 1
        }

        for (let i = 0; i < 3; i++) {
            let newIdx = randomNumGeneration()
            while (theChosenThree.indexOf(newIdx) > -1) {
                newIdx = randomNumGeneration()
            }
            theChosenThree.push(newIdx)
        }

        return theChosenThree
    }

    

    const handleNFTDisplay = (collection: any[]) =>
        collection.map((nft, idx) => {
            return (
                <div key={idx} className='nft-card'>
                    <NFTSquare
                        nftMetadata={nft}
                    />
                    <MintButton
                        currentAccount={currentAccount}
                        setCurrentAccount={setCurrentAccount}
                    />
                </div>
            )
        })

    return (
        <div>

            <div id='nft-container'>
                {nftCollection.length > 0 && handleNFTDisplay(nftCollection)}

                <button id='show-more' className='hover-effect' onClick={handleShowDiffNFTs}>
                    Show Different NFTs
                </button>

            </div>
            <div><Watch /></div>
        </div>
    )
}

export default NFTdisplay