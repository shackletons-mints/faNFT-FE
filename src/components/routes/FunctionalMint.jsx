import react from 'react'

import { mintNftHandler, connectWalletHandler } from '../js-utils/web3Interactions'

const FunctionalMint = (setCurrentAccount, currentAccount) => {

    return (
        <>
            <button onClick={() => connectWalletHandler(setCurrentAccount)}>Connect Wallet</button>
            <button onClick={mintNftHandler} >Mint</button>
        </>
    )
}

export default FunctionalMint