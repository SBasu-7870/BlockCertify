import Web3 from "web3";
import ContractArtifact from "../../../build/contracts/MyContract.json";
import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import generateMerkleProof from "./generateMerkleProof";
import { generateHash } from "./utilityFunctions";


const contractAddress = import.meta.env.VITE_SOLIDITY_CONTRACT_ADDRESS;
const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

const ContractABI = ContractArtifact.abi;

const contractInstance = new web3.eth.Contract(ContractABI, contractAddress);





const getMerkleRootFromProof = (merkleProof) =>{
    if(!merkleProof || merkleProof.length === 0) {
        return '';
    }
    const merkleRootFromProof = merkleProof.reduce((hashProof1, hashProof2) => {
        if(hashProof2.direction === 'right') {
            const hash = generateHash(hashProof1.hash + hashProof2.hash);
            return { hash };
        }
        const hash = generateHash(hashProof2.hash + hashProof1.hash);
        return { hash };
    });
    return merkleRootFromProof.hash;
}







 const verify = async (certificateHash)=>{
    const certifDataRef = doc(db, 'merkleTree', 'certificateData');

    const certifDocSnap = await getDoc(certifDataRef);
    const hashArray = certifDocSnap.data().hash;
    const dataArray = certifDocSnap.data().data;

    const index = hashArray.indexOf(certificateHash);

    const merkleProof = await generateMerkleProof(certificateHash,hashArray);
    const rootHashFromProof = getMerkleRootFromProof(merkleProof); 

    let rootHashFromBlockChain;

    try {
        rootHashFromBlockChain = await contractInstance.methods.getRootHash().call();
        console.log("Root hash:", rootHashFromBlockChain);
      } catch (error) {
        console.error(error);
    }
    

    return {hash:hashArray[index],data:dataArray[index],verified: rootHashFromBlockChain === rootHashFromProof};
}

export default verify;


