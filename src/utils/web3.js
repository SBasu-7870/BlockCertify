import Web3 from 'web3';
import contractAbi from './path/to/build/contracts/Contract.json';

const contractAddress = '<YOUR_CONTRACT_ADDRESS>';
const web3 = new Web3(new Web3.providers.HttpProvider('<ALCHEMY_RPC_URL>'));
const contractInstance = new web3.eth.Contract(contractAbi.abi, contractAddress);

// Call a method on the contract
contractInstance.methods.methodName().call().then((result) => {
  console.log(result);
});
