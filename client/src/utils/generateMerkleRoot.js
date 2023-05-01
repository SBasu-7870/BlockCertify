import Web3 from "web3";
import ContractArtifact from "../../../build/contracts/MyContract.json";
import ensureEven from "./ensureEven";
import generateHash from "./generateHash";

const contractAddress = import.meta.env.VITE_SOLIDITY_CONTRACT_ADDRESS;
const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

const ContractABI = ContractArtifact.abi;

const contractInstance = new web3.eth.Contract(ContractABI, contractAddress);

const generateMerkleRoot = (hashArray) => {
  if (!hashArray || hashArray.length === 0) {
    return "";
  }

  // if there are a odd number of hashes, we simply
  ensureEven(hashArray);

  const combinedHashes = [];

  for (let i = 0; i < hashArray.length; i += 2) {
    const hashPairconcatenated = hashArray[i] + hashArray[i + 1];
    const newHash = generateHash(hashPairconcatenated);
    combinedHashes.push(newHash);
  }

  if (combinedHashes.length === 1) {
    const rootHashValue = combinedHashes.join('');
    const account = web3.eth.accounts.wallet.add({
      privateKey: import.meta.env.VITE_METAMASK_PRIVATE_KEY,
      address: import.meta.env.VITE_METAMASK_ADDRESS
    })
    contractInstance.methods
      .updateRootHash(rootHashValue)
      .send({ from: account.address, gasLimit: 300000 })
      .on("transactionHash", function (hash) {
        console.log(`Transaction hash: ${hash}`);
      })
      .on("receipt", function (receipt) {
        console.log(`Transaction receipt: ${receipt}`);
    });
    // web3.eth.getAccounts().then(console.log);
    return rootHashValue;
  }

  return generateMerkleRoot(combinedHashes);
};

export {generateMerkleRoot};
