import { db } from "../../firebase";

import { collection } from "firebase/firestore";


const merkleTreeRef = db.collection("merkleTree").doc("merkleTreeDoc");
