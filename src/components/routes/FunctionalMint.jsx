import react from 'react'

import { mintNftHandler, connectWalletHandler } from '../js-utils/web3Interactions'

// TODO

// what to do on success??
// on error?

const FunctionalMint = (setCurrentAccount, currentAccount) => {

    return (
        <>
            <button onClick={() => connectWalletHandler(setCurrentAccount)}>Connect Wallet</button>
            <button onClick={mintNftHandler} >Mint</button>
        </>
    )
}

export default FunctionalMint