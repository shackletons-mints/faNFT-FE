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

    const fanData = {
        cid: 'QmNauibfNtgR5kLyF86UVZ6M18b8yJR9Qfx6qnHWXKEjnr',
        title: 'CommonLeaf_KanagawaLeafName_Common2Handle_CooperHandleMaterial_EpicParticle_HeartsparticleEffect_ID-#8096.mp4',
    }

    const fanUpdateData = {
        cid: 'QmNauibfNtgR5kLyF86UVZ6M18b8yJR9Qfx6qnHWXKEjnr',
        ownerAddress: '0xC52fb4ce689989BacEB32Ce83f682842Ca018F41',
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
          })
    }

    const insertFanIntoDatabase = async () => {
        const config = {
            headers: {
                contentType: 'application/json',
            }
        }

        axios.post('/fan', { payload: JSON.stringify(fanData) }, config)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    const updateFanInDatabase = async () => {
        const config = {
            headers: {
                contentType: 'application/json',
            }
        }

        axios.put('/fan', { payload: JSON.stringify(fanUpdateData) }, config)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }
    
    const getFanByCid = async () => {
        const config = {
            headers: {
                contentType: 'application/json'
            }
        }

        axios.get('/get-fan?cid=QmNauibfNtgR5kLyF86UVZ6M18b8yJR9Qfx6qnHWXKEjnr', config)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    return (
        <>
            <button onClick={() => connectWalletHandler(setCurrentAccount)}>Connect Wallet</button>
            <button onClick={testProxyRoute} >Mint</button>
            <button onClick={insertFanIntoDatabase}>create fan</button>
            <button onClick={updateFanInDatabase}>assign fan an owner</button>
            <button onClick={getFanByCid}>get fan by cid</button>
        </>
    )
}

export default FunctionalMint