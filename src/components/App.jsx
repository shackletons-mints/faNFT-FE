import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import contract from 'path'

import NavBar from './NavBar'
import Home from './routes/Home'
import FanContract from './routes/FanContract'

import { checkWalletIsConnected, connectWalletHandler, mintNftHandler, } from './js-utils/web3Interactions'
import revealText from './js-utils/reveal-text'

// const contractAddress = 'ADDRESS'
// const abi = contract


function App() {
    const [currentAccount, setCurrentAccount] = useState('0x0')
    const [navigationName, setNavigationName] = useState('')

    useEffect(() => {
        checkWalletIsConnected(setCurrentAccount)
        window.addEventListener('scroll', revealText)
        window.addEventListener('scroll', determineNavigationName)

        determineNavigationName()
        revealText()
    }, [])

    const determineNavigationName = () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setNavigationName('Back to Top')
        } else {
           setNavigationName('')
        }
    }

    return (
        <div className="App">
            <NavBar
                navigationName={navigationName}
                setNavigationName={setNavigationName}
            />
            <Routes>
                <Route path="/" element={
                    <Home
                        setCurrentAccount={setCurrentAccount}
                        currentAccount={currentAccount}
                    />
                }
                />
            </Routes>
        </div>
    )
}

export default App
