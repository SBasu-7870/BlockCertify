# BlockCertify

BlockCertify is a certificate verification app that leverages the power of blockchain technology to ensure the immutability and transparency of certificates. It utilizes Firebase for storing certificate data in a Merkle Tree data structure and stores the root hash on the Polygon Blockchain for verification purposes.

## Features

- Secure Storage: Certificates are stored securely in Firebase, ensuring the integrity and confidentiality of the data.
- Merkle Tree: Certificate data is organized using a Merkle Tree data structure, allowing for efficient verification and validation.
- Blockchain Verification: The root hash of the Merkle Tree is stored on the Polygon Blockchain, providing an immutable record for certificate verification.
- Polygon Blockchain: BlockCertify utilizes the Polygon Blockchain for its scalability, low transaction fees, and fast confirmations.
- Truffle Deployment: The smart contract is deployed on the Polygon's testnet servers using Truffle, simplifying the deployment process.

## Prerequisites

Before running the BlockCertify application, ensure you have the following components set up:

- [Node.js](https://nodejs.org) (version 14 or higher)
- [Truffle](https://www.trufflesuite.com/truffle) (installed globally)
- [Polygon Network](https://polygon.technology/) (for interacting with the Polygon Blockchain)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Install dependecies for the blockchain part:
 
   ```bash
   npm install
   ```
3. Install truffle globally:

   ```bash
   npm install -g truffle
   ```
4. Compile the smart contract:

   ```bash
   truffle compile
   ```
5. Edit the ```truffle-config.js``` file and replace the mnemonic with your own metamask mnemonic.

6. Finally, deploy the contract:

   ```bash
   truffle deploy --network polygon-testnet
   ```

## Usage

You can start the client server by following the instructions in the ```client/README.md``` file.

## Disclaimer

Please note that BlockCertify is currently running on the Polygon testnet servers. It is intended for testing and demonstration purposes only. Use it accordingly and exercise caution when dealing with real-world certificates and sensitive data.



