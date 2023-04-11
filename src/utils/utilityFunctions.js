import CryptoJS from 'crypto-js';

const LEFT = 'left';
const RIGHT = 'right';


export function generateHash(data){
    const jsonString = JSON.stringify(data);
    const hash = CryptoJS.SHA256(jsonString).toString();
    return hash;
}

export const getLeafNodeDirectionInMerkleTree = (hash, merkleTree) => {
    const hashIndex = merkleTree[0].indexOf(hash);
    return hashIndex % 2 === 0 ? LEFT : RIGHT;
};



export function ensureEven(hashes) {
    if(hashes.length % 2 !== 0) {
        hashes.push(hashes[hashes.length - 1]);
    }
  }