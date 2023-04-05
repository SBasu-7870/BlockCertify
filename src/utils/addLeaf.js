import { db } from "../../firebase";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import generateHash from "./generateHash";





const addLeaf = async (data)=> {
   const merkleTreeRef = doc(db, 'merkleTree', 'merkleTreeDoc');
   const hash = generateHash(data);
   
   try {
    await setDoc(merkleTreeRef, {
        leaves: arrayUnion({ hash, data })
    }, { merge: true });
 
    return hash;
   } catch (error) {
     console.error("Error in adding to database",error);
   }
}


export default addLeaf;