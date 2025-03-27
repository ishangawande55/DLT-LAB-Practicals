# DLT-LAB-Practicals

## 📌 Description
This repository contains a collection of practical experiments related to **Distributed Ledger Technology (DLT)**, **Blockchain**, and **Cryptographic Concepts**. Each practical experiment focuses on a specific concept such as hashing, proof-of-work, secret sharing, digital signatures, Bitcoin scripting, and Hyperledger Fabric.

## 📁 Project Structure
```
DLT-LAB-Practicals/
├── practical-02/
│   ├── sha256_experiment.js        # SHA-256 Hashing Experiment
├── practical-03/
│   ├── proof_of_work.js            # Proof of Work Simulation
├── practical-04/
│   ├── shamir_sss.js               # Shamir's Secret Sharing Scheme
├── practical-05/
│   ├── digital_signature.js        # Digital Signatures with Public/Private Key Pairs
├── practical-06/
│   ├── bitcoin_script_simulator.js # Bitcoin Script Simulation with LockTime Verification
├── practical-08/
│   ├── fabric-samples/             # Hyperledger Fabric Network and Chaincode Deployment
├── package.json                    # Project Metadata & Dependencies
├── README.md                        # Project Documentation
```

## 🛠️ Dependencies
Ensure you have **Node.js** installed. The project uses the following dependencies:

```json
{
  "bitcoinjs-lib": "^6.1.7",         // Bitcoin library for transaction creation
  "ecpair": "^3.0.0",                // ECDSA key pair generation
  "node-forge": "^1.3.1",           // Cryptographic functions
  "secrets.js": "^0.1.8",           // Shamir's Secret Sharing implementation
  "shamir": "^0.7.1",               // Alternative Shamir's Secret Sharing library
  "shamirs-secret-sharing": "^2.0.0", // Another Shamir's Secret Sharing implementation
  "tiny-secp256k1": "^2.2.3"        // Small Secp256k1 library for elliptic curve operations
}
```

Install dependencies by running:
```sh
npm install
```

## 🚀 Running the Practical Experiments

### 🔹 Run SHA-256 Hashing Experiment
```sh
npm run dev:file2
```

### 🔹 Run Proof of Work Simulation
```sh
npm run dev:file3
```

### 🔹 Run Shamir's Secret Sharing Scheme
```sh
npm run dev:file4
```

### 🔹 Run Digital Signature Experiment
```sh
npm run dev:file5
```

### 🔹 Run Bitcoin Script Simulation
```sh
npm run dev:file6
```

### 🔹 Run Hyperledger Fabric Network
```sh
npm run dev:file8
```

## 📝 Author
**Ishan Gawande**  
🔗 [GitHub Profile](https://github.com/ishangawande55)

## 🐞 Issues
If you encounter any bugs or issues, please create an issue in the [Issues Section](https://github.com/ishangawande55/DLT-LAB-Practicals/issues).

## 📜 License
This project is licensed under the **ISC License**.

