import react from 'react'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'

import aboutUs from '../../assets/about-us.svg'
import nft from '../../assets/nft.svg'
import metamask from '../../assets/metamask.svg'
import ether from '../../assets/ether.svg'
import map from '../../assets/map.svg'

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
                src={aboutUs}
            />

            <div className='faq-container' style={{ height: '1000px' }}>

                <Title
                    title='FAQ'
                />

                <div className='card-container'
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        flexBasis: 'auto',
                        flexWrap: 'wrap',
                        gap: '20px 20px'
                    }}
                >

                    <FlipCard
                        title={homeText.whatIsNftTitle}
                        text={homeText.whatIsNft}
                        src={nft}
                    />
                    <FlipCard
                        title={homeText.whatIsMetamaskTitle}
                        text={homeText.whatIsMetamask}
                        linkText={homeText.metamaskLinkText}
                        src={metamask}
                        href='https://metamask.io/'
                    />
                    <FlipCard
                        title={homeText.howCanIBuyTitle}
                        text={homeText.howCanIBuy}
                        src={ether}
                    />
                    <FlipCard
                        title={homeText.roadmapTitle}
                        text={homeText.roadmap}
                        src={map}
                    />

                </div>

            </div>

        </div>
    )
}

export default Home