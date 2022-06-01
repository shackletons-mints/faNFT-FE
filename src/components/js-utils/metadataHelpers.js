import axios from 'axios'
export const gifPropsPopulator = (gifTitle) => {
    // title = 'CommonLeaf_CommonHandle_CommonParticle_ID-#1.gif'
    const gifInfoArray = gifTitle.split('_')
    const rarityLabels = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

    // helper to return only the rarities for each property
    const sliceOut = (removeThis, phrase) => {
        let endSliceHere = phrase.indexOf(removeThis)
        return phrase.slice(0, endSliceHere)
    }

    const getFanRarity = (fanRarityLabels) => {
        const backgroundRarityIndex = Math.max(
            rarityLabels.indexOf(fanRarityLabels.leaf),
            rarityLabels.indexOf(fanRarityLabels.handle),
            rarityLabels.indexOf(fanRarityLabels)
        )

        return rarityLabels[backgroundRarityIndex]
    }

    // pulling out the rarityLabels so we can name the fan based on rarity

    const leaf = sliceOut('Leaf', gifInfoArray[0])
    const leafName = sliceOut('LeafName', gifInfoArray[1])
    const handle = sliceOut('Handle', gifInfoArray[2])
    const handleMaterial = sliceOut('HandleMaterial', gifInfoArray[3])
    const particle = sliceOut('Particle', gifInfoArray[4])
    const particleEffect = sliceOut('particleEffect', gifInfoArray[5])
    // regex pulls out the number only
    const id = gifInfoArray[6].split(/\#(.*?)\./)[1]
    const name = `${getFanRarity({ leaf, handle, particle })}Fan${id}`
    // name = "UncommonFan279"

    return {
        leaf,
        leafName,
        handle,
        handleMaterial,
        particle,
        particleEffect,
        id,
        name
    }
}

// TODO
// import pinata shit into a dotenv file


export const pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            //handle response here
            console.log(response)
            console.log('success!')
        })
        .catch(function (error) {
            console.error(error)
            console.log('failed')
        });
};
