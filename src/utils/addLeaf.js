import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import generateHash from "./generateHash";

function ensureEven(hashes) {
  if(hashes.length % 2 !== 0) {
      hashes.push(hashes[hashes.length - 1]);
  }
}


const generateMerkleRoot = (hashArray)=>{
  if(!hashArray || hashArray.length === 0){
     return '';
  } 

  // if there are a odd number of hashes, we simply
  ensureEven(hashArray);

  const combinedHashes = [];
  
  for(let i=0; i<hashArray.length; i+=2){
    const hashPairconcatenated = hashArray[i] + hashArray[i+1];
    const newHash = generateHash(hashPairconcatenated);
    combinedHashes.push(newHash);
  }

  if(combinedHashes.length === 1){
    return combinedHashes.join('');
  }

  return generateMerkleRoot(combinedHashes);

}

const generateMerkleTree = async (hashes,merkleRoot) =>{
  if(!hashes || hashes.length === 0) {
    return [];
  }
  let lvl = 0;
  const tree = {};

  tree[lvl] = hashes;

  const generate = (hashes, tree) => {
    if(hashes.length === 1) {
        return hashes;
    }
    ensureEven(hashes);
    const combinedHashes = [];
    for(let i = 0; i < hashes.length; i += 2) {
        const hashesConcatenated = hashes[i] + hashes[i + 1];
        const hash = generateHash(hashesConcatenated);
        combinedHashes.push(hash);
    }
    lvl++;
    tree[lvl] = combinedHashes;
    return generate(combinedHashes, tree);
  }
  generate(hashes, tree);
  const merkleTreeRef = doc(db, 'merkleTree', 'merkleTreeStructure');

  try {
    await setDoc(merkleTreeRef,{
      merkleRoot: merkleRoot,
      merkleTree: tree
    },{merge: true})
  } catch (error) {
    console.log("Error Generating Merkle Tree",error);
  }
}




const addLeaf = async (data)=> {
   const certifDataRef = doc(db, 'merkleTree', 'certificateData');
   const certifDocSnap = await getDoc(certifDataRef);
   const hash = generateHash(data);
   let hashArray;
   if(certifDocSnap.exists()){
      hashArray = certifDocSnap.data().hash;
   }else{
     console.log("document does not exist");
   }

   if(hashArray.length % 2 === 0){
     hashArray.push({hash,child:"left"});
   }
   else{
     hashArray.push({hash,child:"right"});
   }
   
   const hashes = hashArray.map(obj => obj.hash);
   try {
     await setDoc(certifDataRef,{
       hash: hashArray,
       data: arrayUnion(data)
     }, {merge: true})
    
    const merkleRoot = generateMerkleRoot(hashes);
    
    await generateMerkleTree(hashes,merkleRoot);
    
    return hash;
   } catch (error) {
     console.error("Error in adding to database",error);
   }
}


export default addLeaf;