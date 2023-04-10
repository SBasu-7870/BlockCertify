import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";



const verify = async (certificateHash)=>{
    const certifDataRef = doc(db, 'merkleTree', 'certificateData');

    const certifDocSnap = await getDoc(certifDataRef);
    const hashArray = certifDocSnap.data().hash;
    const dataArray = certifDocSnap.data().data;

    const index = hashArray.indexOf(certificateHash);

    return {hash:hashArray[index],data:dataArray[index]};
}


export default verify;