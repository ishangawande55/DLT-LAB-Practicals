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