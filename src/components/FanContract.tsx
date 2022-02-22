import { useEffect } from 'react'
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";

const code = `
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract FANFFT is ERC1155, Ownable {
    using SafeMath for uint256;

    constructor() ERC1155("https://ipfs.io/ipfs/QmVNSXTGRhpqKm2sqAeGAtxbu8HMNQ6cebsp6sJeCmkJfD/{id}.json") {
        for(uint256 i = 1; i < 25; i++){
            _mint(msg.sender, i, 1, "");
        }
    }

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        require(to != address(0), "ERC1155: mint to the zero address");

        address operator = _msgSender();
        uint256[] memory ids = _asSingletonArray(id);
        uint256[] memory amounts = _asSingletonArray(amount);

        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);

        _balances[id][to] += amount;
        emit TransferSingle(operator, address(0), to, id, amount);

        _doSafeTransferAcceptanceCheck(operator, address(0), to, id, amount, data);

        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);
    }
}
`

const FanContract = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code">
            <h1>fanFT Contract Code</h1>
            <a>Link to etherscan</a>
            <pre>
                <code id='code' className={`language-solidity`}>{code}</code>
            </pre>
        </div>
    )
}

export default FanContract