import { ethers } from "ethers"
import fanShuiContractABI from './fanShuiAbi.json'

const FAN_SHUI_CONTRACT_ADDRESS = "0xe5E727B6dDFa31080a1cF04C95b2c37C2D50E2a2"

const { ethereum } = window;

export const checkWalletIsConnected = async (setCurrentAccount) => {
    console.log(fanShuiContract)
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

export const mintNftHandler = async () => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(FAN_SHUI_CONTRACT_ADDRESS, fanShuiContractABI, signer)

      // how can we get this?
      const metadataURI = "https://bafybeiad4cjnorjvotfqx737c2aha2fuvg2rfo6bznio22vbw6iyuyqs7y.ipfs.nftstorage.link/0000000000000000000000000000000000000000000000000000000000000001.json"
      console.log("Initialize payment");
        let nftTxn = await nftContract.mintNFT(
            signer,
             metadataURI,
            {
                from: "ADDRESS",
                value: "1000000000000000",
            }
        )



    //   let nftTxn = await nftContract.mintNFT(1, {
    //     value: ethers.utils.parseEther("0.01"),
    //   });

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
