import { useEffect, useState } from 'react'
import { Watch } from 'react-loader-spinner'
import './NFTdisplay.css'

import MintButton from './MintButton'

const colors = {
    Common: '#708090',
    Uncommon: '#006400', 
    Rare: '#0000ff',
    Epic: '#800080',
    Legendary: '#ffd700',
}

const NFTSquare = ({ nftMetadata, currentAccount, setCurrentAccount }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [showMore, setShowMore] = useState(false)

    const fanRarity = nftMetadata.properties.Leaf.display_type
    const fanColor = colors[fanRarity]

    const handleRarity = nftMetadata.properties.Handle.display_type
    const handleColor = colors[handleRarity]

    const particleRarity = nftMetadata.properties.Particle.display_type
    const particleColor = colors[particleRarity]

    useEffect(() => {
        loadingWatcher()
    }, [])

    const loadingWatcher = () => {
        const gif = document.getElementById(nftMetadata.name)

        gif?.addEventListener('load', (event) => {
            gif.classList.remove('hidden')
            setIsLoading(false)
        })
    }

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    const nastyFuckingTableComponent = () => (
        <>
            <table className="prop-table" border="1">
                <tr><th></th><th></th><th className='header'>Rarity</th><th></th><th className='header'>Name</th></tr>
                <tr style={{backgroundColor: fanColor}}><td className='prop-header'>Fan</td><td></td><td>{nftMetadata.properties.Leaf.display_type}</td><td></td><td className='last-value'>{nftMetadata.properties.Leaf.value}</td></tr>
                <tr style={{backgroundColor: handleColor}}><td className='prop-header'>Handle</td><td></td><td>{nftMetadata.properties.Handle.display_type}</td><td></td><td className='last-value'>{nftMetadata.properties.Handle.value}</td></tr>
                <tr style={{backgroundColor: particleColor}}><td className='prop-header'>Particle</td><td></td><td>{nftMetadata.properties.Particle.display_type}</td><td></td><td className='last-value'>{nftMetadata.properties.Particle.value}</td></tr>
            </table>
            <button id='mint' className='hover-effect' onClick={handleShowMore}>Show Less Info</button>
            <MintButton
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </>
    )

    const buttons = () => (
        <>
            <button id='mint' className='hover-effect' onClick={handleShowMore}>Show More Info</button>
            <MintButton
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </>
    )



    return (
        <div className='nft'>
            <h5>{nftMetadata.name}</h5>
            {/* is there a tag that might help? */}
            {isLoading &&
                <div id='loading'>
                    <Watch />
                </div>}
            <img id={nftMetadata.name} className='hidden' src={nftMetadata.image} alt="gif" decoding='sync' loading='eager' />
            {!showMore
                ? buttons()
                : nastyFuckingTableComponent()
            }
        </div>
    )
}

export default NFTSquare