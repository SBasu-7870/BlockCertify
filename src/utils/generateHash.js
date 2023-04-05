import CryptoJS from 'crypto-js';


export default function(data){
    const jsonString = JSON.stringify(data);
    const hash = CryptoJS.SHA256(jsonString).toString();
    return hash;
}