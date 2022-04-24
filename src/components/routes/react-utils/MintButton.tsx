import React from 'react'

import PreparationModal from './PreparationModal'
import { connectWalletHandler, mintNftHandler, } from '../../js-utils/web3Interactions'
import './MintButton.css'

interface MintButtonProps {
    currentAccount?: string
    setCurrentAccount?: Function
    buttonText: string
}


const MintButton: React.FC<MintButtonProps> = ({ currentAccount, setCurrentAccount, buttonText, showModal }) => {
    

// onClick={() => mintNftHandler()}
    const connectWalletButton = (setCurrentAccount: Function) => {
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
