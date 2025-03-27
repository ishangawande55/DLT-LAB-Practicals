# Digital Signatures using RSA and SHA-256

## Overview
This experiment demonstrates the implementation of Digital Signatures using RSA key pairs and SHA-256 hashing. The process involves generating a key pair, signing a message with the private key, and verifying the signature using the public key.

## Prerequisites
Ensure you have Node.js installed and the required cryptographic library:
```sh
npm install node-forge
```

## How It Works
1. **Generate an RSA Key Pair**: The program creates a 2048-bit RSA key pair.
2. **Sign a Message**: The message is hashed using SHA-256 and signed using the private key.
3. **Verify the Signature**: The signature is verified using the public key.

## Code Explanation

```javascript
const forge = require('node-forge'); // Import cryptography library

// Generate RSA Key Pair
const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);

console.log("\n Generated RSA Key Pair:");
console.log("Public Key:\n", publicKeyPem);
console.log("Private Key:\n", privateKeyPem);

// Message to be signed
const message = "This is a secure message";

// Create a digital signature
const md = forge.md.sha256.create(); // Use SHA-256 hashing
md.update(message, 'utf8');
const signature = keypair.privateKey.sign(md);

console.log("\n Digital Signature Created:");
console.log(signature.toString('hex'));

// Verify the digital signature
const verify = keypair.publicKey.verify(md.digest().bytes(), signature);

console.log("\n Signature Verification Status:", verify ? "Valid Signature" : "Invalid Signature");
```

## Explanation of Code
- **Key Pair Generation**: Creates a 2048-bit RSA key pair.
- **Message Hashing**: SHA-256 is used to hash the message before signing.
- **Signing Process**: The private key signs the hash, producing a unique digital signature.
- **Verification**: The public key verifies if the signature is valid.

## Expected Output
- Generated RSA public and private keys.
- Digital signature in hexadecimal format.
- A message indicating whether the signature is valid or not.

## Conclusion
This experiment demonstrates how digital signatures provide authentication, integrity, and non-repudiation in cryptographic applications. The RSA algorithm, combined with SHA-256 hashing, ensures secure message signing and verification.

## Further Exploration
- Try modifying the message and observe the verification failure.
- Experiment with different hashing algorithms like SHA-1 or SHA-512.
- Implement the same logic in a real-world application, such as document signing.

