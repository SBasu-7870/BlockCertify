import Web3 from 'web3';
import ContractABI from './ContractABI.json';

const contractAddress = import.meta.env.VITE_SOLIDITY_CONTRACT_ADDRESS;
const web3 = new Web3('https://rpc-mumbai.maticvigil.com');

const contractInstance = new web3.eth.Contract(ContractABI, contractAddress);

// Call a method on the contract
contractInstance.methods.updateRootHash(rootHashValue).send({ from: '0x1234567890123456789012345678901234567890' })
  .on('transactionHash', function(hash) {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('receipt', function(receipt) {
    console.log(`Transaction receipt: ${receipt}`);
});