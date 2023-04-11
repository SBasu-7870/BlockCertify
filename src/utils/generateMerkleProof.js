import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import generateMerkleTree from './generateMerkleTree';
import { getLeafNodeDirectionInMerkleTree } from './utilityFunctions';


const generateMerkleProof = async (hash,hashes) => {
    if(!hash || !hashes || hashes.length === 0) {
        return null;
    }

    const merkleTreeRef = doc(db, 'merkleTree', 'merkleTreeStructure');
    const docSnap = await getDoc(merkleTreeRef);

    const tree = docSnap.data().merkleTree;

    
    const merkleProof = [{
        hash,
        direction: getLeafNodeDirectionInMerkleTree(hash,tree)
    }]
    let hashIndex = tree[0].indexOf(hash);

    const Length = Object.keys(tree).length;

    for(let level = 0; level < Length - 1; level++){
        const isLeftChild = hashIndex % 2 === 0;
        const siblingDirection = isLeftChild ? 'right' : 'left';
        const siblingIndex = isLeftChild ? hashIndex + 1 : hashIndex - 1;
        const siblingNode = {
            hash: tree[level][siblingIndex],
            direction: siblingDirection
        };
        merkleProof.push(siblingNode);
        hashIndex = Math.floor(hashIndex / 2);
    }

    return merkleProof;
}


export default generateMerkleProof;