import React, { useState, useEffect } from 'react'

import MintButton from './MintButton'
import './Countdown.css'

const Countdown = ({ currentAccount, setCurrentAccount }) => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()
        /**
         * The + before the new Date object is shorthand to tell JavaScript to cast the object as an integer, 
         * which gives you the object’s Unix timestamp represented as microseconds since the epoch.
         */

        // here we put the date we want the lottery to end
        // this example it's set to end on may 31st
        const difference = +new Date(`${year}-5-31`) - +new Date()
        let timeLeft: any = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [year] = useState(new Date().getFullYear())

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
    })

    const timerComponents: any = []

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        )
    })

    return (
        <div className='countdown'>
            <div className='wrapper wrapper-animated'>
            <h1>Lottery closes in</h1>
            <p id='timer'>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </p>
            </div>

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

export default Countdown
