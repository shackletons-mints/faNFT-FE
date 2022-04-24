import React, { useEffect, useState } from 'react'

import Title from './react-utils/Title'
import PreparationModal from './react-utils/PreparationModal'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'
import LotterySpecs from './react-utils/LotterySpecs'

import lotteryText from '../text/lotteryText'

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

            <Title
                title='DoubleDragonCrypto Lottery'
                details={lotteryTitleText.details}
            />

            <Countdown
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                showModal={showModal}
            />
            <PreparationModal 
                hideModal={hideModal}
                isOpen={isOpen}
            />
            <LotterySpecs />

        </div>

    )
}

export default Lottery
