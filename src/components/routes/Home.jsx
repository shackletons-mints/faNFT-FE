import react from 'react'
import { render } from 'react-dom'
import homeText from '../text/homeText.js'

import FlipCard from './react-utils/FlipCard'
import Title from './react-utils/Title'

const Home = () => {
    const mainTitle = {
        title: 'Double Dragon Crypto',
        caption: 'Awesome tagline about us here',
        subtitle: 'Bodacious subtitle',
    }

    const renderText = (textFile) => {

        const [ aboutUs ] = textFile.filter(obj => obj.title === 'About Us')

        return (
            <>
                <FlipCard
                    title={aboutUs.title}
                    text={aboutUs.text}
                    src={aboutUs.src}
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

                        {textFile.filter(obj => obj.title !== 'About Us').map((card, idx) => (
                            < FlipCard
                                key={idx}
                                title={card?.title}
                                text={card?.text}
                                src={card?.src}
                                linkText={card?.linkText}
                                href={card?.href}
                            />
                        ))}

                    </div>

                </div>
            </>
        )
    }

    return (
        <div>

            <Title
                title={mainTitle.title}
                border={true}
                details={mainTitle.caption}
            />

            {renderText(homeText)}
        </div>
    )
}

export default Home