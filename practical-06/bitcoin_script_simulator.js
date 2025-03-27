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