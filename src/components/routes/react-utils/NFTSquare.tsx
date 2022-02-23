import { useEffect } from 'react'
import gif from '../../../assets/TEST.gif'
import './NFTdisplay.css'

const NFTSquare = ({ nftMetadata }) => {
    return (
        <div className='nft'>
            <h5>{nftMetadata.name}</h5>
            <img src={nftMetadata.image} alt="gif" />
        </div>
    )
}

export default NFTSquare