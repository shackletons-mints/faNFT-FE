import Title from './Title'

import lotteryText from '../../text/lotteryText'

import fees from '../../../assets/fees.svg'
import timeframe from '../../../assets/clock.svg'
import prize from '../../../assets/prize.svg'
import prize2 from '../../../assets/prize2.svg'
import prize3 from '../../../assets/prize3.svg'
import trophy from '../../../assets/trophy.svg'
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
                    <h1 className='section-title-2'>Lottery Protocol</h1>
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

                <div className='container-payment'>
                    <div className='inside'>
                        <div className='front'>
                            <img src={fees} />
                            <h2 className='display-3'>Entry Fees</h2>
                        </div>
                        <div className='back'>
                            <p className="lead text">
                            <ol className='section-text'>
                            <li>Entry Fee: 100 USD/xxx ETH</li>
                            <li>Usage Fee: 10 USD/xxx ETH</li>
                            <li>Approx Transaction Fee: 0.22USD/xxx ETH</li>
                            <li id='total-cost'><b>Total Cost: 110.22 USD/xxx ETH</b></li>
                        </ol>
                            </p>
                        </div>
                    </div>
                </div>


                <div className='container-payment'>
                    <div className='inside'>
                        <div className='front'>
                            <img src={trophy} />
                            <h2 className='display-3'>Prizes</h2>
                        </div>
                        <div className='back'>
                            <p className="lead text">
                            <ol className='section-text-ol'>
                            <li><img className='section-image-inline' src={prize} /><b>Grand Prize -&nbsp;</b>50% of the pot</li>
                            <li><img className='section-image-inline' src={prize2} /><b>2nd Prize -&nbsp;</b>25% of the pot</li>
                            <li><img className='section-image-inline' src={prize3} /><b>3rd Prize -&nbsp;</b>12.5% of the pot</li>
                            <br></br>
                            <li className='moar-pad-left'><b>4th Prize -&nbsp;</b>6.25% of the pot</li>
                            <li className='moar-pad-left'><b>5th Prize -&nbsp;</b>3.125% of the pot</li>
                            <li className='moar-pad-left'><b>6th Prize -&nbsp;</b>3.125% of the pot</li>
                        </ol>
                            </p>
                        </div>
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

            <div className='external-deps-container' >

            <div className='section-container-4a'>
                <div className='single-container'>
                    {/* <h1 className='section-title-2'>Arbitrum</h1> */}
                    <img src="https://offchainlabs.com/wp-content/themes/offchain/images/home/arbitrum/arbirtum_logo.svg" className="arbitrum" />
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

            <div className='section-container-4b'>
                <div className='left-container-4'>
                    <img src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg" className="chain-link" />
                </div>
                <div className='right-container-4b'>
                    <div className='section-text-2'>
                        <p>
                            We use Chainlink in this contract to calculate true randomness<br></br>
                            <a href='https://docs.chain.link/docs/get-a-random-number/'>
                                Read more about the Chainlink oracle we use here
                            </a> <br></br>
                            <a href='https://coinmarketcap.com/alexandria/article/what-is-arbitrum'>
                                Test out our randomness function here
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            </div>

        </>
    )
}

export default LotterySpecs
