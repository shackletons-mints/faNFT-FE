import { ethers } from "ethers"
import fanShuiContractABI from './fanShuiAbi.json'

const FAN_SHUI_CONTRACT_ADDRESS = "0xe5E727B6dDFa31080a1cF04C95b2c37C2D50E2a2"

const { ethereum } = window;

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
        alert("Please install Metamask!");
    }

    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log(`Found an Account! Address: ${accounts[0]}`);
        setCurrentAccount(accounts[0]);
    } catch (error) {
        console.error(error);
    }
};

export const mintNftHandler = async (uri, currentAccount) => {
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const nftContract = new ethers.Contract(FAN_SHUI_CONTRACT_ADDRESS, fanShuiContractABI, signer)

            console.log("Initialize payment");
            let nftTxn = await nftContract.mintNFT(
                currentAccount,
                uri,
                {
                    from: currentAccount,
                    value: "1000000000000000",
                }
            )

            console.log("Mining... please wait");
            await nftTxn.wait();

            console.log(
                `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
            );
        } else {
            console.log("Ethereum object does not exist");
        }
    } catch (error) {
        console.error(error);
    }
};
