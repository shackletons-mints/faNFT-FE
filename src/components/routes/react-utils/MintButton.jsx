import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

import { connectWalletHandler, mintNftHandler, } from '../../js-utils/web3Interactions'
import './MintButton.css'


const MintButton = ({
    currentAccount,
    setCurrentAccount,
    isOwned,
    uri,
    setIsOwned,
}) => {

    const handleMintClick = async (uri, currentAccount) => {
        try {
            // console.log("Initialize payment")
            await mintNftHandler(uri, currentAccount, toast)

            const data = JSON.stringify({
                payload: {
                  uri,
                  owner: currentAccount,
                }
              })
              
              const config = {
                method: 'put',
                url: '/put-fan',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data,
              }
              
            //   console.log("Mining... please wait")
              const response = await axios(config)
            //   console.log(
            //     `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
            //   )

              setIsOwned(true)

        } catch (error) {
            console.error(error)
            setIsOwned(false)
        }
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
