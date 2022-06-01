import { ethers } from "ethers";

import { contractAddress, NFT_URI } from '../../assets/CONSTANTS'
import { createMetadataAndGiveMeCid } from '../../components/js-utils/metadataCreation'
import abi from '../../assets/json/fanft.json'

const { ethereum } = window;

export const getUserWallet = async () => {
    if (!ethereum) {
        console.log('blah blah blah connect your  wallet asshole')
        return '0x0'
    } else {
        try {
            const accounts = await ethereum.request({ method: "eth_accounts" })
            return accounts[0]
        } catch (error) {
            console.error(error)
        }
    }    
}

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

export const mintNftHandler = async () => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(contractAddress, abi, signer)
      const accounts = await ethereum.request({ method: "eth_accounts" })

      const cid = createMetadataAndGiveMeCid()
      // create the metadata

      console.log("Initialize payment");
      let transaction = await nftContract.mintNFT(accounts[0], NFT_URI(cid), {
          value: '1000000000000000'
      })

      console.log("Mining... please wait");
      await transaction.wait();

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${transaction.hash}`
      );
    } else {
      console.log("Ethereum object does not exist");
    }
  } catch (error) {
    console.error(error);
  }
};
