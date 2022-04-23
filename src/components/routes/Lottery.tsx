import React, { useEffect } from 'react'

import Title from './react-utils/Title'
import LotteryAgreement from './react-utils/LotteryAgreement'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'
import LotterySpecs from './react-utils/LotterySpecs'

import lotteryText from '../text/lotteryText'

import './Lottery.css'

const Lottery = ({currentAccount, setCurrentAccount}) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const { agreementText, lotteryFlipCardsTexts, lotteryTitleText } = lotteryText

    console.log(lotteryFlipCardsTexts[1].text)

    return (
        <div className='lottery-page'>
        <Title
                title='DoubleDragonCrypto Lottery'
                details={lotteryTitleText.details}
            />

            <Countdown 
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
            <LotterySpecs />

        </div>

    )
}

export default Lottery
