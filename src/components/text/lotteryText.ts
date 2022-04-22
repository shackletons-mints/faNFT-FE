import fee from '../../assets/fees.svg'
import clock from '../../assets/clock.svg'
import prize from '../../assets/prize.svg'

const agreementText = {
    title: 'Lottery Agreement',
    text: 'By clicking the \'Enter Lottery\' button be aware that:',
    list: [
        '-- You will be signing two transactions',
        '1. you will be paying xxx ETH as a usage fee to Double Dragon Crypto',
        '2. you will be paying xxx ETH to contribute to the lottery pot',
        '-- DO NOT RELOAD BROWSER INBETWEEN PAYMENTS, THIS WILL RESULT IN:',
        '1. losing your ETH',
        '2. your account information not being added to the entrants database',
        '3. your transaction failing to reach the Ethereum Network',
        `-- this dApp uses Arbitrum to lower transaction costs to the Ethereum Network`,
    ],
    subtext: 'Addtionally, Double Dragon Crypto promises to:',
    subList: [
        '1. provide a fair lottery contract for all parties',
        '2. provide a bug-free/hacker-resistent smart contract',
        '3. give you a chance to win life changing money',
    ],
    href: 'https://coinmarketcap.com/alexandria/article/what-is-arbitrum',
    linkText: 'You can read more about Arbitrum here',
    listIndentions: [ 1,2,4,5,6 ],
}

const fees = {
    title:'Entry Fees',
    text: [
        'Entry Fee: 100 USD/xxx ETH',
        'Usage Fee: 10 USD/xxx ETH',
        'Estimated Transaction Fee: 0.22USD/xxx ETH',
        'Total Cost: 110.22 USD/xxx ETH',
    ],
    src: fee,
}

const purse = {
    title: 'Prizes',
    text: [
        'Grand Prize: 50% of the total pot',
        '2nd Prize: 25% of the total pot',
        '3rd Prize: 12.5% of the total pot',
        '4th Prize: 6.25% of the total pot',
        '5th Prize: 3.125% of the total pot',
        '6th Prize: 3.125% of the total pot',
    ],
    src: prize,
}

const flow = {
    title: 'Time Frame',
    text: [
        'Lottery will run for one month, when the month is over...',
        'Anyone can call the determineWinners function to calculate <xxx amount> random winners',
        'After this function is called, anyone can invoke payoutWinners to distrubute the funds'
    ],
    src: clock,
}

const lotteryTitleText = {
    title: 'Lottery_v1',
    details: 'Enter for your chance to win Life Changeing Money!',
}

const lotteryFlipCardsTexts = [ fees, purse, flow ]

const lotteryText = {
    agreementText,
    lotteryFlipCardsTexts,
    lotteryTitleText,
}

export default lotteryText
