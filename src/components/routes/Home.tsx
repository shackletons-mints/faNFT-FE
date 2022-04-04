import react from 'react'
import './Home.css'

const Home = () => {

    return (
        <div>
            <h1 className='display-1'>Home Page</h1>
            <div className='about-us-container'>
                <h5 className='display-5'>About Us</h5>
                <p className="lead about-us">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, ipsam eius illo dolorum magni deleniti doloremque dignissimos placeat mollitia quia accusantium, architecto necessitatibus alias exercitationem nam aperiam?
                    Ab, quidem autem deleniti molestias nostrum aut inventore atque, doloremque quaerat consectetur alias. Illum ea eos iusto ipsum blanditiis. Ullam iste earum excepturi.
                </p>
            </div>
            <div id='faq'>
                <h5 className='display-5'>FAQ</h5>
                <h6 className='display-6 questions'>What's an NFT?</h6>
                <p className='answers'>
                    A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.
                    NFTs can be used to represent items such as photos, videos, audio, and other types of
                </p>
                <h6 className='display-6 questions'>How can you buy our shit?</h6>
                <p className='answers'>
                    You need Ethereum and Metamask wallet to buy your Ape. The initial sell is available from our website. Then secondary sell would be possible by Opensea.
                </p>
                <h6 className='display-6 questions'>What is Metamask?</h6>
                <p className='answers'>
                Metamask is a crypto wallet that can store your Ethereum and is needed to purchase and mint a Basic Bored Ape. Learn more about Metamask here! 
                It's so easy and user-friendly crypto wallet.You need Metamask to buy an Ape.
                </p>

            </div>
        </div>
    )
}

export default Home