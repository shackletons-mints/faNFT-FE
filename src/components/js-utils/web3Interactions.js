import { ethers } from "ethers"
import fanShuiContractABI from './fanShuiAbi.json'

const FAN_SHUI_CONTRACT_ADDRESS = "0xe5E727B6dDFa31080a1cF04C95b2c37C2D50E2a2"

const { ethereum } = window;

const parseError = (err) => err.split(',')[1]

export const checkWalletIsConnected = async (setCurrentAccount) => {
    if (!ethereum) {
        console.log("Make sure you have Metamask installed!");
        return;
    } else {
        console.log("Wallet exists! You're all set. Rock and roll!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
        const account = accounts[0];
        console.log(`Found an authorized account: ${account}`);
        setCurrentAccount(account);
    } else {
        console.log("No authorized account found.");
    }
};

export const connectWalletHandler = async (setCurrentAccount) => {
    if (!ethereum) {
        toast.info('Please install Metamask!', {
            closeOnClick: true,
            autoClose: false,
        })
    }

    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log(`Found an Account! Address: ${accounts[0]}`);
        setCurrentAccount(accounts[0]);
    } catch (error) {
        console.error(error);
    }
};

export const mintNftHandler = async (uri, currentAccount, toast) => {
    const mintNftToast = toast.loading('Initializing Payment')
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const nftContract = new ethers.Contract(FAN_SHUI_CONTRACT_ADDRESS, fanShuiContractABI, signer)

            let nftTxn = await nftContract.mintNFT(
                currentAccount,
                uri,
                {
                    from: currentAccount,
                    value: "1000000000000000",
                }
            )

            toast.update(mintNftToast, {
                render: "Mining... please wait",
                type: 'loading',
            })

            await nftTxn.wait()

            toast.update(mintNftToast, {
                render: `Mined! See your transaction on etherscan! https://rinkeby.etherscan.io/tx/${nftTxn.hash}`,
                type: 'success',
                closeOnClick: false,
                autoClose: false,
                isLoading: false
            })
        } else {
            toast.error('Ethereum object does not exist')
            console.log("Ethereum object does not exist")
        }
    } catch (error) {
        console.log()
        toast.update(mintNftToast, {
            render: 'Error processing transaction... ' + parseError(error.message),
            type: 'error',
            isLoading: false,
            closeOnClick: true,
        })
        
    }
};
