const crypto = require('crypto');

// Function to generate SHA-256 hash
function generateSHA256Hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// Function to perform Proof of Work
function proofOfWork(blockData, difficulty) {
    let nonce = 0;
    const targetPrefix = "0".repeat(difficulty); // Required leading zeros

    console.log(`Starting Proof of Work for Difficulty Level: ${difficulty}...`);

    const startTime = Date.now(); // Start time measurement

    while (true) {
        const hash = generateSHA256Hash(blockData + nonce);
        if (hash.startsWith(targetPrefix)) {
            const endTime = Date.now(); // End time measurement
            console.log(`Valid Nonce Found: ${nonce}`);
            console.log(`Hash: ${hash}`);
            console.log(`Time Taken: ${(endTime - startTime) / 1000} seconds\n`);
            return;
        }
        nonce++;
    }
}

// Run Proof of Work for difficulty levels from 1 to 10
console.log("=== Implementing Proof of Work with Dynamic Difficulty ===");
const blockData = "Blockchain Block Data"; // Simulated block data

for (let difficulty = 1; difficulty <= 10; difficulty++) {
    proofOfWork(blockData, difficulty);
}