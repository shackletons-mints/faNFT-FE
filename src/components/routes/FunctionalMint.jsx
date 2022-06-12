import react from 'react'
import axios from 'axios'

import { mintNftHandler, connectWalletHandler } from '../js-utils/web3Interactions'

// TODO

// what to do on success??
// on error?

const FunctionalMint = (setCurrentAccount, currentAccount) => {

    const testData = JSON.stringify({
        first: 1,
        second: 2,
        third: '3',
    })

    const testProxyRoute = () => {
        axios.post('http://localhost:3000/api', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:3000/api',
        //     headers: {
        //         headers: { 'Content-Type': 'json' }
        //     },
        //     data: testData,
        // })
        //     .then((response) => {
        //         console.log(response)
        //     })
    }
    return (
        <>
            <button onClick={() => connectWalletHandler(setCurrentAccount)}>Connect Wallet</button>
            <button onClick={testProxyRoute} >Mint</button>
        </>
    )
}

export default FunctionalMint