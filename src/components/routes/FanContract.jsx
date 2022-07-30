import { useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import './FanContract.css'

import Title from './react-utils/Title'

const code = `// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract FaNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("FaNFT", "FAN") {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}
`

const FanContract = () => {
    useEffect(() => {
        Prism.highlightAll()
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='Code'>
            <Title
                title='fanFT Contract Code'
                border={true}
            />

            <a>Link to etherscan</a>
            <pre>
                <code id='code' className='language-sol'>{code}</code>
            </pre>
        </div>
    )
}

export default FanContract
