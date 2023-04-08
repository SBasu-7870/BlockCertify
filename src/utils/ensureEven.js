

export default function ensureEven(hashes) {
    if(hashes.length % 2 !== 0) {
        hashes.push(hashes[hashes.length - 1]);
    }
  }