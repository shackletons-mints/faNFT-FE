// These are icon imports
    // for sake of organization and to lessen confusion
    // all icons I'll prepend with _
    
import _aboutus from '../../assets/about-us.svg'
import _nft from '../../assets/nft.svg'
import _metamask from '../../assets/metamask.svg'
import _ether from '../../assets/ether.svg'
import _map from '../../assets/map.svg'

const aboutUs = {
    text: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur, ipsam eius illo dolorum magni deleniti doloremque dignissimos placeat mollitia quia accusantium, architecto necessitatibus alias exercitationem nam aperiam?
        Ab, quidem autem deleniti molestias nostrum aut inventore atque, doloremque quaerat consectetur alias.
    `,
    title: 'About Us',
    src: _aboutus,
}

const whatIsNft = {
    text: `
        A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.
        NFTs can be used to represent items such as photos, videos, audio, and other types of media.    
    `,
    title: 'What\'s an NFT?',
    src: _nft,
}

const whatIsMetamask = {
    text: `
        Metamask is a crypto wallet that can store your Ethereum and is needed to purchase and mint a Basic Bored Ape.
        It's so easy and user-friendly crypto wallet.You need Metamask to buy an Ape.    
    `,
    title: 'What is Metamask?',
    href: 'https://metamask.io/',
    linkText: 'Learn more about Metamask here!',
    src: _metamask,
}

const howCanIBuyNft = {
    text: `
        You need Ethereum and Metamask wallet to buy one of these amazing fans. The initial sell is available from our website. Then secondary sell would be possible by Opensea.    
    `,
    title: 'How can you buy our shit?',
    src: _ether,
}

const roadMap = {
    text: `
        Roadmap stuff that will impress some idiot on the internet.
    `,
    title: 'Roadmap',
    src: _map,
}

const homeText = [
    aboutUs,
    whatIsMetamask,
    whatIsNft,
    howCanIBuyNft,
    roadMap,
]

export default homeText
