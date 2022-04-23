import Title from './Title'

import lotteryText from '../../text/lotteryText'

import fee from '../../../assets/fees.svg'
import timeframe from '../../../assets/clock.svg'
import prize from '../../../assets/prize.svg'
import logo from '../../../assets/logo.png'
import dice from '../../../assets/dice.svg'

import './LotterySpecs.css'

const LotterySpecs = () => {
    return (
        <>

            <div className='section-container-2'>
                <div className='left-container-2'>
                    <img className='section-image-2' src={timeframe} />
                </div>
                <div className='right-container-2'>
                    <h1 className='section-title-2'>The Process</h1>
                    <span className='section-divider-2'></span>
                    <div className='section-text-2'>
                        <p>
                            Anyone is eligible to enter into the lottery.
                            The lottery will close after a month.
                            Then anyone can call the function <strong>determineWinners</strong>
                            which uses a ChainLink oracle to create truly random numbers to
                            pick winners out of our smart contract. After winners are chosen, anyone
                            can call the function <strong>payoutWinners</strong> to release the winnings.
                        </p>
                    </div>
                </div>
            </div>

            <div className='payments-container' >

                <div className='section-container-payment'>
                    <div className='one-container'>
                        <h1 className='section-title'>Entry Fees</h1>
                        <span className='section-divider'></span>
                        <ol className='section-text'>
                            <li>Entry Fee: 100 USD/xxx ETH</li>
                            <li>Usage Fee: 10 USD/xxx ETH</li>
                            <li>Estimated Transaction Fee: 0.22USD/xxx ETH</li>
                            <li>Total Cost: 110.22 USD/xxx ETH</li>
                        </ol>
                    </div>

                </div>

                <div className='section-container-payment'>
                    <div className='one-container'>
                        <span className='inline-logo'>
                            <img className='section-image-inline' src={prize} />
                            <h1 className='section-title'>Prizes</h1>
                        </span>
                        {/* <span className='section-divider'></span> */}
                        <ol className='section-text'>
                            <li><b>Grand Prize –&nbsp;</b>50% of the total pot</li>
                            <li><b>2nd Prize –&nbsp;</b>25% of the total pot</li>
                            <li><b>3rd Prize –&nbsp;</b>12.5% of the total pot</li>
                            <li><b>4th Prize –&nbsp;</b>6.25% of the total pot</li>
                            <li><b>5th Prize –&nbsp;</b>3.125% of the total pot</li>
                            <li><b>6th Prize –&nbsp;</b>3.125% of the total pot</li>
                        </ol>
                    </div>

                </div>

            </div>

            <Title
                title='Lottery Agreement'
            />

            <div className='section-container-3'>
                <div className='left-container'>
                    <h1 className='section-title'>By clicking Enter Lottery be aware that:</h1>
                    <span className='section-divider-3'></span>
                    <ol className='section-text'>
                        <li>You will be signing two transactions.</li>
                        <li> &emsp; &emsp; you will be paying xxx ETH as a usage fee to Double Dragon Crypto</li>
                        <li> &emsp; &emsp; you will be paying xxx ETH to contribute to the lottery pot</li>
                        <li>DO NOT RELOAD BROWSER INBETWEEN PAYMENTS, THIS MAY RESULT IN:</li>
                        <li> &emsp; &emsp; loss of eth</li>
                        <li> &emsp; &emsp; your account information not being added to the contract state</li>
                        <li> &emsp; &emsp; your transaction failing to reach the Ethereum Network</li>
                    </ol>
                </div>
                <div className='right-container'>
                    <img className='section-image-3' src={dice} />
                </div>

            </div>

            <div className='section-container-5'>
                <div className='left-container'>
                    <h1 className='section-title'>Double Dragon Crypto promises to:</h1>
                    <span className='section-divider-5'></span>
                    <ol className='section-text'>
                        <li>provide a fair lottery contract for all parties</li>
                        <li>provide a bug-free/hacker-resistent smart contract</li>
                        <li>give you a chance to win life changing money</li>
                    </ol>
                </div>
                <div className='right-container'>
                    <img className='section-image-5' src={logo} />
                </div>

            </div>

            <div className='section-container-4'>
                <div className='left-container-4'>
                    <img src="https://offchainlabs.com/wp-content/themes/offchain/images/home/arbitrum/arbirtum_logo.svg" className="arbitrum" />
                </div>
                <div className='right-container-2'>
                    <h1 className='section-title-2'>Arbitrum</h1>
                    <span className='section-divider-2'></span>
                    <div className='section-text-2'>
                        <p>
                            We use Arbitrum in this contract to lower Ethereum Network transaction fees! <br></br>
                            <a href='https://coinmarketcap.com/alexandria/article/what-is-arbitrum'>
                                Read more about Arbitrum here
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LotterySpecs
