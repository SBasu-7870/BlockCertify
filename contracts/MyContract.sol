// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;


contract MyContract {
    string public rootHash;

    event RootHashUpdated(string newRootHash);
   
    function updateRootHash(string memory newRootHash) public {
        rootHash = newRootHash;


        emit RootHashUpdated(newRootHash);
    }
  
    function getRootHash() public view returns(string memory){
        return rootHash;
    }

}