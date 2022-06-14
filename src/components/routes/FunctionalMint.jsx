import react from 'react'
import axios from 'axios'

import { mintNftHandler, connectWalletHandler } from '../js-utils/web3Interactions'

// TODO

// what to do on success??
// on error?

const FunctionalMint = (setCurrentAccount, currentAccount) => {

    const testData = {
        hello: 'hello',
        bye: 'bye',
    }

    // Let's send data like this

    // { payload: JSON_STRING }
    
    const testProxyRoute = () => {
        const config = {
            headers: {
                contentType: "application/json",
            }
        }
        axios.post('/test', { payload: JSON.stringify(testData) }, config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <>
            <button onClick={() => connectWalletHandler(setCurrentAccount)}>Connect Wallet</button>
            <button onClick={testProxyRoute} >Mint</button>
        </>
    )
}

export default FunctionalMint