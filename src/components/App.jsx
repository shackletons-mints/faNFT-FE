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
import reveal from './js-utils/reveal'
import revealRight from './js-utils/reveal-right'
import revealText from './js-utils/reveal-text'

// const contractAddress = 'ADDRESS'
// const abi = contract


function App() {
    const [currentAccount, setCurrentAccount] = useState('0x0')
    const [navigationName, setNavigationName] = useState('')

    useEffect(() => {
        checkWalletIsConnected(setCurrentAccount)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', reveal)
        window.addEventListener('scroll', revealRight)
        window.addEventListener('scroll', revealText)
        window.addEventListener('scroll', determineNavigationName)

        reveal()
        revealRight()
        revealText()
        determineNavigationName()
    }, [])

    const determineNavigationName = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
            <Footer />
        </div>
    )
}

export default App
