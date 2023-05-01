[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex bd6213e..422cc58 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -1,3 +1,20 @@[m
 @tailwind base;[m
 @tailwind components;[m
[31m-@tailwind utilities;[m
\ No newline at end of file[m
[32m+[m[32m@tailwind utilities;[m
[32m+[m
[32m+[m[32m@layer base {[m
[32m+[m[32m    .text-border-black {[m
[32m+[m[32m        color: #fff;[m
[32m+[m[32m        -webkit-text-stroke: 2px black;[m
[32m+[m[32m        text-shadow:[m[41m [m
[32m+[m[32m          2px 2px 0 #000, /* top-left border */[m
[32m+[m[32m          2px 2px 0 #000,  /* top-right border */[m
[32m+[m[32m          2px 2px 0 #000,  /* bottom-left border */[m
[32m+[m[32m          2px 2px 0 #000;   /* bottom-right border */[m
[32m+[m[32m    }[m
[32m+[m[41m      [m
[32m+[m
[32m+[m[32m    .text-shadow-black {[m
[32m+[m[32m        text-shadow: 0 4px 0 #141414;[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/pages/Landing.jsx b/src/pages/Landing.jsx[m
[1mindex d0066a1..10260b2 100644[m
[1m--- a/src/pages/Landing.jsx[m
[1m+++ b/src/pages/Landing.jsx[m
[36m@@ -1,16 +1,19 @@[m
 import React from "react";[m
[31m-import LoginComponent from "../components/LoginComponent";[m
[31m-import CertificateForm from "./CertificateForm";[m
[31m-import VerifyCertificate from "./VerifyCertificate";[m
[32m+[m[32mimport Navbar from "../components/Navbar";[m
[32m+[m[32m// import LoginComponent from "../components/LoginComponent";[m
[32m+[m[32m// import CertificateForm from "./CertificateForm";[m
[32m+[m[32m// import VerifyCertificate from "./VerifyCertificate";[m
 [m
 function Landing() {[m
   return ([m
[31m-    // <div className="flex flex-row justify-center items-center mt-10 pt-5">[m
[31m-    //   <LoginComponent title={"Verify"} description={"Login to verify your certificate"}/>[m
[31m-    //   <LoginComponent title={"Issue"} description={"Login to issue a certificate"}/>[m
[31m-    // </div>[m
[31m-    // <CertificateForm/>[m
[31m-    <VerifyCertificate/>[m
[32m+[m[32m    <div className="flex flex-col justify-center items-center">[m
[32m+[m[32m      <Navbar/>[m
[32m+[m[32m      <div className="flex flex-wrap mt-4 px-6 mx-6 text-center">[m
[32m+[m[32m        <h1 className="text-7xl font-bold">Certify, Verify and <br/>[m
[32m+[m[32m        <span className="text-border-black text-shadow-black text-gray-50">authenticate</span> with ease[m
[32m+[m[32m        </h1>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
   );[m
 }[m
 [m
[1mdiff --git a/src/utils/addLeaf.js b/src/utils/addLeaf.js[m
[1mindex b2b8d43..39dd0e7 100644[m
[1m--- a/src/utils/addLeaf.js[m
[1m+++ b/src/utils/addLeaf.js[m
[36m@@ -24,7 +24,7 @@[m [mconst addLeaf = async (data)=> {[m
        data: arrayUnion(data)[m
      }, {merge: true})[m
     [m
[31m-    // generateMerkleRoot(hashArray);[m
[32m+[m[32m    generateMerkleRoot(hashArray);[m
     [m
     await generateMerkleTree(hashArray);[m
     [m
