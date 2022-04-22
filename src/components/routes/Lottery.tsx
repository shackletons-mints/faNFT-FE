import Title from './react-utils/Title'
import LotteryAgreement from './react-utils/LotteryAgreement'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'

import lotteryText from '../text/lotteryText'

const Lottery = ({currentAccount, setCurrentAccount}) => {

    return (
        <div className='lottery-page'>
        <Title
                title='Lottery_v1'
                border={true}
            />

            <Countdown />

            <LotteryAgreement
                title={lotteryText?.importantInfo?.title}
                text={lotteryText?.importantInfo?.text}
                list={lotteryText?.importantInfo?.list}
                subtext={lotteryText?.importantInfo?.subtext}
                subList={lotteryText?.importantInfo?.subList}
                href={lotteryText?.importantInfo?.href}
                linkText={lotteryText?.importantInfo?.linkText}
            />

            <div className='buttons-container'>
                <MintButton 
                    currentAccount={currentAccount}
                    setCurrentAccount={setCurrentAccount}
                    buttonText='Enter Lottery'
                />
            </div>

        </div>

    )
}

export default Lottery