import { useEffect, useState } from 'react'
import axios from 'axios'
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

const parseRarities = rarity => {
    let lastCharIdx = rarity.length - 1
    if (Number(rarity[lastCharIdx])) {
        return rarity.slice(0, -1)
    }
    return rarity
}

const NFTSquare = ({ nftMetadata, currentAccount, setCurrentAccount, derivedURL }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [fanOwnership, setFanOwnership] = useState(null)
    const [isOwned, setIsOwned] = useState(false)

    const fanRarity = parseRarities(nftMetadata.properties.Leaf.display_type)
    const fanColor = colors[fanRarity.split('Leaf')[0]]

    const handleRarity = parseRarities(nftMetadata.properties.Handle.display_type)
    const handleColor = colors[handleRarity.split('Handle')[0]]

    const particleRarity = nftMetadata.properties.Particle.display_type
    const particleColor = colors[particleRarity]

    useEffect(() => {
        loadingWatcher()
        getFan(derivedURL)
    }, [])

    const getFan = async (uri) => {
        const config = {
            method: 'get',
            headers: {
                contentType: 'application/json',
            },
            params: {
                uri,
            },
        }

        const res = await axios('/get-fan', config)
        setIsOwned(!!res.data.owner)
    }

    const loadingWatcher = () => {
        const mp4 = document.getElementById(nftMetadata.name)

        mp4?.addEventListener('load', (event) => {
            mp4.classList.remove('hidden')
            setIsLoading(false)
        })
    }

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    const nastyFuckingTableComponent = () => (
        <> 
        <div id='mint' className='hover-effect' onClick={handleShowMore}>Show Less Info</div>
            <table onClick={handleShowMore} className="prop-table" border="1">
                <tr>
                    <th className='no-border'></th>
                    <th className='no-border'></th>
                    <th className='header'>Rarity</th><th></th><th className='header'>Name</th>
                </tr>
                <tr style={{ backgroundColor: fanColor }}>
                    <td className='prop-header'>
                        <span>Fan</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='mid-value'>
                        <span>{nftMetadata.properties.Leaf.display_type.split('Leaf')[0]}</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='last-value'>
                        <span>{nftMetadata.properties.Leaf.value}</span>
                    </td>
                </tr>
                <tr style={{ backgroundColor: handleColor }}>
                    <td className='prop-header'>
                        <span>Handle</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='mid-value'>
                        <span>{nftMetadata.properties.Handle.display_type.split('Handle')[0]}</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='last-value'>
                        <span>{nftMetadata.properties.Handle.value}</span>
                    </td>
                </tr>
                <tr style={{ backgroundColor: particleColor }}>
                    <td className='prop-header'>
                        <span>Particle</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='mid-value'>
                        <span>{nftMetadata.properties.Particle.display_type}</span>
                    </td>
                    <td className='no-border'></td>
                    <td className='last-value'>
                        <span>{nftMetadata.properties.Particle.value}</span>
                    </td>
                </tr>
            </table>
            {/* <button id='mint' className='hover-effect' onClick={handleShowMore}>Show Less Info</button> */}
            {/* <div id='mint' className='hover-effect' onClick={handleShowMore}>Show Less Info</div> */}
            <MintButton
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </>
    )

    const buttons = () => (
        <>

            <div id='mint' className='hover-effect' onClick={handleShowMore}>Show More Info</div>
            {/* <button id='mint' className='hover-effect' onClick={handleShowMore}>Show More Info</button> */}
            <MintButton
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                isOwned={isOwned}
            />
        </>
    )



    return (
        <div className='nft'>
            <h4 className='nft-name'>{nftMetadata.name}</h4>
            {/* is there a tag that might help? */}
            {/* {isLoading &&
                <div id='loading'>
                    <Watch />
                </div>
            } */}
            <video id={nftMetadata.name} controls width="250" autoPlay={true} muted={true} src={nftMetadata.image} decoding='sync' loading='eager' />
            {!showMore
                ? buttons()
                : nastyFuckingTableComponent()
            }
        </div>
    )
}

export default NFTSquare
