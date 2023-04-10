import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import generateHash from "./generateHash";
import generateMerkleRoot from "./generateMerkleRoot";
import generateMerkleTree from "./generateMerkleTree";



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

   hashArray.push(hash);
   try {
     await setDoc(certifDataRef,{
       hash: hashArray,
       data: arrayUnion(data)
     }, {merge: true})
    
    // generateMerkleRoot(hashArray);
    
    await generateMerkleTree(hashArray);
    
    return hash;
   } catch (error) {
     console.error("Error in adding to database",error);
   }
}


export default addLeaf;