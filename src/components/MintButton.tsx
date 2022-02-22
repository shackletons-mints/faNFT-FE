import { connectWalletHandler, mintNftHandler, } from './utils/web3Interactions.js'
import './MintButton.css'

const connectWalletButton = (setCurrentAccount) => {
    return (
        <button className='btn' id='connect' onClick={() => connectWalletHandler(setCurrentAccount)}>
            Connect Wallet
        </button>
    )
}

const mintNftButton = () => {
    return (
        <div>
            <button type="button" id='mint' onClick={() => mintNftHandler()}>
                Mint NFT
            </button>
        </div>
    )
}

const MintButton = ({ currentAccount, setCurrentAccount }) => {
    return (
        <div>
            {currentAccount ? mintNftButton() : connectWalletButton(setCurrentAccount)}
        </div>
    )
}

export default MintButton