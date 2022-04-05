import react from 'react'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'

const Home = () => {

    return (
        <div>

            <Title 
                title='Double Dragon Crypto'
                border={true}
                details={homeText.titleCaption}
            />

            <FlipCard
                title={homeText.aboutUsTitle}
                text={homeText.aboutUs}
            />

            <div className='faq-container'>
                
                <Title
                    title='FAQ'
                />

                <FlipCard
                    title={homeText.whatIsNftTitle}
                    text={homeText.whatIsNft}
                />
                <FlipCard
                    title={homeText.whatIsMetamaskTitle}
                    text={homeText.whatIsMetamask}
                    linkText={homeText.metamaskLinkText}
                    href='https://metamask.io/'
                />
                <FlipCard
                    title={homeText.howCanIBuyTitle}
                    text={homeText.howCanIBuy}
                />

            </div>

        </div>
    )
}

export default Home