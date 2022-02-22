import { ethers } from 'ethers'

const { ethereum } = window

export const checkWalletIsConnected = async (setCurrentAccount) => {
    if (!ethereum) {
        console.log('Make sure you have Metamask installed!')
        return
    } else {
        console.log('Wallet exists! You\'re all set. Rock and roll!')
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
        const account = accounts[0]
        console.log(`Found an authorized account: ${account}`)
        setCurrentAccount(account)
    } else {
        console.log('No authorized account found.')
    }
}

export const connectWalletHandler = async (setCurrentAccount) => {
    if (!ethereum) {
        alert("Please install Metamask!")
    }

    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
        console.log(`Found an Account! Address: ${accounts[0]}`)
        setCurrentAccount(accounts[0])
    } catch (error) {
        console.error(error)
    }
}

export const mintNftHandler = async () => {
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const nftContract = new ethers.Contract(contractAdress, abi, signer)

            console.log('Initialize payment')
            let nftTxn = await nftContract.mintNFT(1, { value: ethers.utils.parseEther('0.01') })

            console.log('Mining... please wait')
            await nftTxn.wait()

            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
        } else {
            console.log('Ethereum object does not exist')
        }
    } catch (error) {
        console.error(error)
    }
}
