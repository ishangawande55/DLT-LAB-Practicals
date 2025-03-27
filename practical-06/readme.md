# Bitcoin Transaction Simulator with LockTime Verification

## 📌 Overview
This experiment simulates a Bitcoin transaction with a LockTime feature. LockTime ensures that a transaction cannot be processed before a specified blockchain block height, improving security and time-based constraints on transactions.

## 🛠️ Technologies Used
- **Node.js**: JavaScript runtime for executing scripts
- **bitcoinjs-lib**: Bitcoin library for constructing transactions
- **ecpair**: Elliptic Curve cryptography for key pair generation
- **tiny-secp256k1**: Secp256k1 curve implementation used in Bitcoin

## 🔑 Key Features
1. Generates a random Bitcoin key pair (public and private keys).
2. Constructs a Pay-to-Public-Key-Hash (P2PKH) transaction.
3. Implements LockTime to prevent transaction execution before a specific block height.
4. Validates whether the transaction is spendable based on the current block height.

## 📜 Code Explanation
```javascript
const bitcoin = require('bitcoinjs-lib'); // Import Bitcoin library
const ECPair = require('ecpair').ECPairFactory(require('tiny-secp256k1'));

// Function to simulate a Bitcoin transaction with LockTime
function createTransaction(lockTime, currentBlockHeight) {
    console.log("\nCreating Bitcoin Transaction with LockTime...");

    // Generate a random key pair (simulating sender's wallet)
    const keyPair = ECPair.makeRandom();
    const { publicKey } = keyPair;

    // Convert publicKey to Buffer to avoid Uint8Array issues
    const p2pkh = bitcoin.payments.p2pkh({ pubkey: Buffer.from(publicKey) });

    console.log("Public Key:", publicKey.toString('hex'));
    console.log("LockTime Set To:", lockTime);
    console.log("Current Block Height:", currentBlockHeight);

    // Check if the transaction can be spent
    if (currentBlockHeight >= lockTime) {
        console.log("\nLockTime Passed! Transaction Can Be Processed.");
    } else {
        console.log("\nLockTime Not Reached! Transaction is Locked.");
    }

    return p2pkh;
}

// Example Usage
const lockTime = 800000; // Example: Lock transaction until block 800,000
const currentBlockHeight = 799500; // Example: Current blockchain height

createTransaction(lockTime, currentBlockHeight);
```

## 🛠️ How It Works
1. **Generate Key Pair**: The script creates a new Bitcoin key pair using `ECPair.makeRandom()`.
2. **Define LockTime**: The user sets a lock time (block height) to restrict transaction processing.
3. **Check Transaction Validity**:
   - If the current blockchain height is greater than or equal to the LockTime, the transaction is processed.
   - Otherwise, the transaction remains locked and cannot be spent yet.

## 🚀 Running the Script
### Prerequisites
Ensure you have Node.js installed.

### Installation
```sh
npm install bitcoinjs-lib ecpair tiny-secp256k1
```

### Execute the Script
```sh
node bitcoin_script_simulator.js
```

## 🎯 Expected Output
```
Creating Bitcoin Transaction with LockTime...
Public Key: <Generated Public Key>
LockTime Set To: 800000
Current Block Height: 799500

LockTime Not Reached! Transaction is Locked.
```
(If `currentBlockHeight` >= `lockTime`, it will say: `LockTime Passed! Transaction Can Be Processed.`)

## 📌 Conclusion
This experiment demonstrates how Bitcoin transactions can be restricted using LockTime, ensuring enhanced security and controlled execution. 🚀

