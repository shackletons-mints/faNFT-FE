import Title from './react-utils/Title'
import LotteryAgreement from './react-utils/LotteryAgreement'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'

import lotteryText from '../text/lotteryText'

const Lottery = ({currentAccount, setCurrentAccount}) => {

    const { importantInfo } = lotteryText

    return (
        <div className='lottery-page'>
        <Title
                title='Lottery_v1'
                border={true}
            />

            <Countdown />

            <div className='buttons-container'>
                <MintButton 
                    currentAccount={currentAccount}
                    setCurrentAccount={setCurrentAccount}
                    buttonText='Enter Lottery'
                />
            </div>

            <LotteryAgreement
                title={importantInfo?.title}
                text={importantInfo?.text}
                list={importantInfo?.list}
                subtext={importantInfo?.subtext}
                subList={importantInfo?.subList}
                href={importantInfo?.href}
                linkText={importantInfo?.linkText}
                listIndentions={importantInfo?.listIndentions}
            />

        </div>

    )
}

export default Lottery
