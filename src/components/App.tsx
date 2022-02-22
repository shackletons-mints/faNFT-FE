import './App.css'
import { useEffect, useState } from 'react'
// import contract from 'path'

import Title from './Title'
import NFTdisplay from './NFTdisplay'
import MintButton from './MintButton'
import NavBar from './NavBar'

import { checkWalletIsConnected, connectWalletHandler, mintNftHandler,  } from './utils/web3Interactions.js'

// const contractAddress = 'ADDRESS'
// const abi = contract


function App() {
    const [currentAccount, setCurrentAccount] = useState(null)

    useEffect(() => {
        checkWalletIsConnected(setCurrentAccount)
    }, [])

    return (
        <div className="App">
            <NavBar />
            <Title />
            <NFTdisplay />
            <MintButton 
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </div>
    )
}

export default App
