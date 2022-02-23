import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NFTdisplay.css'

import NFTSquare from './NFTSquare'
import MintButton from './MintButton'

interface NFTdisplayProps {
    currentAccount?: string;
    setCurrentAccount?: Function;
}

const NFTdisplay: React.FC<NFTdisplayProps> = ({ currentAccount, setCurrentAccount }) => {
    const [showMore, setShowMore] = useState(5)
    const [nftCollection, setNftCollection] = useState([])

    useEffect(() => {
        getMetadata()
    }, [])
    // TODO
        // MAKE THIS RENDER CORRECTLY
    const getMetadata = async () => {
        for(let i = 1; i <= showMore + 1; i++) {
            const config = {
                headers: {
                    // 'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Credentials': true,
                }
            }
            const paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64")

            try {
                const nftMetadata = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVF3uM9BnffDMfPoeADuYfvXcjvW8wHr8eHRxphpV9C7J/${paddedHex}.json`, config)
                setNftCollection([...nftCollection, nftMetadata.data])
            } catch (error) {
                console.error(error)
            }

        }
    }
    
    const handleShowMore = () => {
        setShowMore(showMore + 6)
    }

    const renderShowMore = (showing: number) => {
        if (showing >= nftCollection.length) {
            return false
        }
        return true
    }

    const handleNFTDisplay = (showMe: number, collection: any[]) => 
    collection.map((nft, idx) => {
            if (idx > showMe) return
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
                {handleNFTDisplay(showMore, nftCollection)}
                {renderShowMore(showMore)
                ? <button id='show-more' className='hover-effect' onClick={handleShowMore} >Show More</button>
                : <h3>No More Gifs :(</h3>
                }
                
            </div>
        </div>
    )
}

export default NFTdisplay