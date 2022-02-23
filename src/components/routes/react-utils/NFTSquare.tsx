import gif from '../../../assets/TEST.gif'
import './NFTdisplay.css'

const NFTSquare = ({ nftMetadata }) => {
    console.log('metadata: ', nftMetadata)
    return (
        <img className='nft' src={nftMetadata.image} alt="gif" />
    )
}

export default NFTSquare