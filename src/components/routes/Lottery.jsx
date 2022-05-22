import Title from './react-utils/Title'
import StaticCard from './react-utils/StaticCard'
import MintButton from './react-utils/MintButton'

import lotteryText from '../text/lotteryText'

const Lottery = () => {

    return (
        <>
            <Title
                title='COMING SOON'
            />
            <StaticCard
                title={lotteryText.title}
                text={lotteryText.specs}
            />
            <div className='buttons-container'>
                <button>Buy into Lottery</button> 
            </div>
            <div className='lottery-timer'>
                <div>HERE WE WILL SHOW YOU A BEAUTIFUL COUNTDOWN UNTIL THE LOTTERY IS OVER</div>
            </div>
        </>

    )
}

export default Lottery