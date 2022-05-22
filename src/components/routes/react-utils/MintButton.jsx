import React from 'react'

import { connectWalletHandler, mintNftHandler, } from '../../js-utils/web3Interactions'
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
            <button type="button" id='mint' className='hover-effect' onClick={() => mintNftHandler()}>
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