import React from 'react'

import fee from '../../../assets/fees.svg'
import dragon from '../../../assets/clock.svg'

import './SectionCard.css'

// const LotteryFlipCard: React.FC<LotteryFlipCardProps> = ({ title, text, src }) => {
//     return (
//             <div className='container'>
//                 <div className='inside'>
//                     <div className='front'>
//                         {src && <img src={src} />}
//                         <h2 className='display-3'>{title}</h2>
//                     </div>
//                     <div className='back'>
//                         <ul className="flip-list">
//                             {text?.map((blurb, idx) => (
//                                 <li key={idx}>{blurb}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//     )
// }

const SectionCard = () => {
    return (
        <>
        <div className='section-container-1'>
            <div className='left-container'>
                <h1 className='section-title'>Entry Fees
                </h1>
                <span className='section-divider'></span>
                <ol className='section-text'>
                    <li>Entry Fee: 100 USD/xxx ETH</li>
                    <li>Usage Fee: 10 USD/xxx ETH</li>
                    <li>Estimated Transaction Fee: 0.22USD/xxx ETH</li>
                    <li>Total Cost: 110.22 USD/xxx ETH</li>
                </ol>
            </div>
            <div className='right-container'>
                <img className='section-image' src={fee} />
            </div>

        </div>

        <div className='section-container-2'>
            <div className='left-container-2'>
                <img className='section-image-2' src={dragon} />
            </div>
            <div className='right-container-2'>
                <h1 className='section-title-2'>Time Frame</h1>
                <span className='section-divider'></span>
                <div className='section-text'>
                    <p>
                        Anyone is eligible to enter into the lottery.... 
                        Anyone can call the determineWinners function to calculate xxx amount random winners
                        After this function is called, anyone can invoke payoutWinners to distrubute the funds
                    </p>
                </div>
            </div>
            {/*     title: 'Time Frame',
    text: [

    ], 
    */}

        </div>
        </>
    )
}

export default SectionCard
