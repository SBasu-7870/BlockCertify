import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import ensureEven from "./ensureEven";
import generateHash from "./generateHash";


const generateMerkleTree = async (hashes) =>{
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
        merkleTree: tree
      },{merge: true})
    } catch (error) {
      console.log("Error Generating Merkle Tree",error);
    }
  }


export default generateMerkleTree;  