import react from 'react'
import textValues from './textVariables.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'

const Home = () => {

    return (
        <div>

            <Title 
                title='Double Dragon Crypto'
                border={true}
                details={textValues.titleCaption}
            />

            <FlipCard
                title={textValues.aboutUsTitle}
                text={textValues.aboutUs}
            />

            <div className='faq-container'>
                
                <Title
                    title='FAQ'
                />

                <FlipCard
                    title={textValues.whatIsNftTitle}
                    text={textValues.whatIsNft}
                />
                <FlipCard
                    title={textValues.whatIsMetamaskTitle}
                    text={textValues.whatIsMetamask}
                />
                <FlipCard
                    title={textValues.howCanIBuyTitle}
                    text={textValues.howCanIBuy}
                />

            </div>

        </div>
    )
}

export default Home