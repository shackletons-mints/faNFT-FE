import React from 'react'
import Title from './react-utils/Title'
import NFTdisplay from './react-utils/NFTdisplay'

interface FanFTProps {
    currentAccount?: string;
    setCurrentAccount?: Function;
}
// TODO:
    // VIEW COLLECTION ON OPENSEA BUTTON
    // CONTRACT ADDRESS LINK TO ETHERSCAN
    // SOCIAL LINKS
const FanFT: React.FC<FanFTProps> = ({ currentAccount, setCurrentAccount }) => {
    return (
        <div>
            <Title 
                title='faNFT'
                border={true}
            />
            <NFTdisplay 
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
        </div>
    )
}

export default FanFT
