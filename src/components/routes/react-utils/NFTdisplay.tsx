import React, { useState, useEffect } from 'react'
import './NFTdisplay.css'

import NFTSquare from './NFTSquare'
import MintButton from './MintButton'

interface NFTdisplayProps {
    currentAccount?: string;
    setCurrentAccount?: Function;
}

const NFT_DATA = [
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
    'URL',
]

const NFTdisplay: React.FC<NFTdisplayProps> = ({ currentAccount, setCurrentAccount }) => {
    const [showMore, setShowMore] = useState(5)
    
    const handleShowMore = () => {
        setShowMore(showMore + 6)
    }

    const renderShowMore = (showing) => {
        if (showing >= NFT_DATA.length) {
            return false
        }
        return true
    }

    const handleNFTDisplay = (showMe) => 
        NFT_DATA.map((nft, idx) => {
            if (idx > showMe) return
            return (
                <div key={idx} className='nft-card'>
                    <NFTSquare />
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
                {handleNFTDisplay(showMore)}
                {renderShowMore(showMore)
                ? <button id='show-more' className='hover-effect' onClick={handleShowMore} >Show More</button>
                : <h3>No More Gifs :(</h3>
                }
                
            </div>
        </div>
    )
}

export default NFTdisplay