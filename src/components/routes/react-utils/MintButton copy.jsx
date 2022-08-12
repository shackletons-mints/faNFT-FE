import React from 'react'

import { connectWalletHandler, mintNftHandler, } from '../../js-utils/web3Interactions'
import './MintButton.css'


const MintButton = ({ currentAccount, setCurrentAccount, buttonText, showModal }) => {


// onClick={() => mintNftHandler()}
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
                <button type="button" id='mint' onClick={showModal}>
                    {buttonText}
                </button>
            </div>
        )
    }

    return (
        <div>
            {currentAccount ? mintNftButton() : connectWalletButton(setCurrentAccount)}
        </div>
    )
}

export default MintButton
