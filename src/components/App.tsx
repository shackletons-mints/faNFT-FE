import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import contract from 'path'

import NavBar from './NavBar'
import Home from './Home'
import FanFT from './FanFT'
import FanContract from './FanContract'

import { checkWalletIsConnected, connectWalletHandler, mintNftHandler, } from './utils/web3Interactions.js'

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
            <Routes>
                <Route path="/fanFT" element={
                    <FanFT 
                        setCurrentAccount={setCurrentAccount}
                        currentAccount={currentAccount}
                    />}
                />
                <Route path="/" element={
                    <Home />
                }
                />
                <Route path='/contract' element={
                    <FanContract />
                }
                />
            </Routes>
        </div>
    )
}

export default App
