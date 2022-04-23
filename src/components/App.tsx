import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import contract from 'path'

import NavBar from './NavBar'
import Home from './routes/Home'
import FanFT from './routes/FanFT'
import FanContract from './routes/FanContract'
import Lottery from './routes/Lottery'
import Footer from './Footer'

import { checkWalletIsConnected, connectWalletHandler, mintNftHandler, } from './js-utils/web3Interactions'

// const contractAddress = 'ADDRESS'
// const abi = contract


function App() {
    const [currentAccount, setCurrentAccount] = useState('0x0')

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
                <Route path='/lottery' element={
                    <Lottery 
                        setCurrentAccount={setCurrentAccount}
                        currentAccount={currentAccount}
                    />
                }
                />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
