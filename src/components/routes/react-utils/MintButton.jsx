import React from 'react'

import { connectWalletHandler, mintNftHandler, } from '../../js-utils/web3Interactions'
import './MintButton.css'


const MintButton = ({
    currentAccount,
    setCurrentAccount,
    isOwned,
    uri,
}) => {

    const handleMintClick = (uri, currentAccount) => {
        mintNftHandler(uri, currentAccount)
    }

    // onClick={() => mintNftHandler()}
    const connectWalletButton = (setCurrentAccount) => {
        return (
            <button className='btn' id='connect' onClick={() => connectWalletHandler(setCurrentAccount)}>
                Connect Wallet
            </button>
        )
    }

    const mintNftButton = () =>
        isOwned
            ?
            (<div>
                <button type="button" id='owned' disabled={true}>
                    Owned
                </button>
            </div>)
            :
            (<div>
                <button type="button" id='mint' onClick={() => handleMintClick(uri, currentAccount)}>
                    Mint
                </button>
            </div>)


    return (
        <div>
            {currentAccount ? mintNftButton() : connectWalletButton(setCurrentAccount)}
        </div>
    )
}

export default MintButton
