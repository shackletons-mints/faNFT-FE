import react from 'react'
import Title from './Title'
import NFTdisplay from './NFTdisplay'
import MintButton from './MintButton'

const FanFT = ({ currentAccount, setCurrentAccount }) => {
    return (
        <div>
            <Title />
            <NFTdisplay />
            <MintButton
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </div>
    )
}


export default FanFT