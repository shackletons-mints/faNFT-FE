// const fs = require("fs");
// const axios = require("axios");
import * as dotenv from "dotenv";
const { 
    PINATA_API_KEY,
    PINATA_SECRET_API_KEY, } = dotenv
import { gifPropsPopulator, pinJSONToIPFS } from './metadataHelpers.js'
import { getUserWallet } from './web3Interactions'
import { determineElement } from './elementCreation'

import { nfts } from '../mock_db/mockData'

export const createMetadataAndGiveMeCid = () => {
    let cid = ''
    for (let i = 0; i < nfts.length; i++) {
        if (nfts[i].minted !== '') continue

        const nftId = nfts[i].title.split('_')[6].split(/\#(.*?)\./)[1]
        let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + nftId.toString(16)).substr("-64");
        const gifProps = gifPropsPopulator(nfts[i].title)
        console.log(gifProps)
        cid = nfts[i].cid

        const nftMetadata = JSON.stringify({
            image: `https://ipfs.io/ipfs/${nfts[i].cid}`,
            name: gifProps.name,
            description: '1 of 1,000 unique fans generated using THREE.js',
            properties: {
                Leaf: {
                    name: 'Fan',
                    value: gifProps.leafName, // leaf name
                    display_type: gifProps.leaf, // leaf rarity
                },
                Handle: {
                    name: 'Handle Material',
                    value: gifProps.handleMaterial,
                    display_type: gifProps.handle,
                },
                Particle: {
                    name: 'Particle Effect',
                    value: gifProps.particleEffect,
                    display_type: gifProps.particle,
                },
                Element: {
                    name: 'User Element',
                    value: determineElement(getUserWallet()),
                    display_type: determineElement(getUserWallet()),
                }
            },
        })

        nfts[i].minted = getUserWallet()
        // console.log("key", PINATA_API_KEY)
        pinJSONToIPFS("a039470bfc879d0aa163", "7c4be6982c1ed49bcbb5a3e2f7378fd19b305a8b0a32e2ea2b8068965a998171", nftMetadata)
        console.log(nftMetadata)
        break
    }

    return cid
}
