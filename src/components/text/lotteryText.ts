const importantInfo = {
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

const lotteryText = {
    importantInfo,
}

export default lotteryText
