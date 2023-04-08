import ensureEven from "./ensureEven";

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

export default generateMerkleRoot;