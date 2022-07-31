import React, { useEffect, useState } from 'react'

import Title from './react-utils/Title'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'
import LotterySpecs from './react-utils/LotterySpecs'

import lotteryText from '../text/lotteryText'

import logo from '../../assets/logo.png'

import './Lottery.css'

const Lottery = ({ currentAccount, setCurrentAccount }) => {
    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => {
      setIsOpen(true)
    }

    const hideModal = () => {
      setIsOpen(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { agreementText, lotteryFlipCardsTexts, lotteryTitleText } = lotteryText

    return (
        <div className='lottery-page'>

            <div className='lottery-title-container'>
                <h1 className='lottery-title'>DoubleDragonCrypto <br></br> Lottery</h1>
                <img className='lottery-title-logo' src={logo} />
            </div>

            <Countdown
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                showModal={showModal}
            />
            <LotterySpecs />

        </div>

    )
}

export default Lottery
