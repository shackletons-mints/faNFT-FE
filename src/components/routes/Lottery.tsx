import Title from './react-utils/Title'
import LotteryAgreement from './react-utils/LotteryAgreement'
import MintButton from './react-utils/MintButton'
import Countdown from './react-utils/Countdown'
import SectionCard from './react-utils/SectionCard'

import lotteryText from '../text/lotteryText'

const Lottery = ({currentAccount, setCurrentAccount}) => {

    const { agreementText, lotteryFlipCardsTexts, lotteryTitleText } = lotteryText

    console.log(lotteryFlipCardsTexts[1].text)

    return (
        <div className='lottery-page'>
        <Title
                title={lotteryTitleText.title}
                details={lotteryTitleText.details}
            />

            <Countdown />

            <div className='buttons-container'>
                <MintButton 
                    currentAccount={currentAccount}
                    setCurrentAccount={setCurrentAccount}
                    buttonText='Enter Lottery'
                />
            </div>

            {/* TODO: Add in the Lottery Structure */}
            {/* <FlipCard 
                key={idx}
                title={card?.title}
                text={card?.text}
                src={card?.src}
                linkText={card?.linkText}
                href={card?.href}
            /> */}

            <SectionCard />

            {/* <div className='lottery-card-container'
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    flexBasis: 'auto',
                    flexWrap: 'wrap',
                    gap: '20px 20px'
                }}
            >
                {lotteryFlipCardsTexts.map((card, idx) => {

                    return (
                        <LotteryFlipCard 
                            key={idx}
                            title={card.title}
                            text={card.text}
                            src={card?.src}
                        />
                    )
                })}

            </div> */}

            <LotteryAgreement
                title={agreementText.title}
                text={agreementText.text}
                list={agreementText.list}
                subtext={agreementText.subtext}
                subList={agreementText.subList}
                href={agreementText.href}
                linkText={agreementText.linkText}
                listIndentions={agreementText.listIndentions}
            />

        </div>

    )
}

export default Lottery
