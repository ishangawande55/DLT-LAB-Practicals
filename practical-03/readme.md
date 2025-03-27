# Proof of Work with Dynamic Difficulty Levels in Blockchain

## Overview
This experiment demonstrates the concept of **Proof of Work (PoW)** in a blockchain system by dynamically adjusting difficulty levels. The PoW mechanism ensures computational work is required to add a block to the blockchain, enhancing security against malicious actors.

## Objective
- Implement Proof of Work (PoW) using **SHA-256** hashing.
- Find a valid **nonce** for different difficulty levels (1 to 10).
- Ensure the hash starts with a number of leading zeros equal to the difficulty level.
- Measure and display the computational time taken for each difficulty level.

## Prerequisites
Before running the program, ensure you have **Node.js** installed on your system.

## Code Explanation
The following logic is implemented:
1. **SHA-256 Hashing**: Generates a hash using the input data and a changing nonce.
2. **Proof of Work Process**:
   - Iterates through nonces until a hash with the required number of leading zeros is found.
   - Higher difficulty levels require more leading zeros, increasing computation time.
3. **Time Measurement**: Calculates the time taken to find a valid nonce.

## Code Implementation
```javascript
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
```

## How to Run
1. Save the code as `proof_of_work.js`.
2. Open a terminal in the project directory.
3. Run the following command:
   ```bash
   node proof_of_work.js
   ```
4. Observe the output as the nonce and hash are computed for difficulty levels from 1 to 10.

## Expected Output
The output will display the **nonce**, **valid hash**, and **time taken** for each difficulty level. Example:
```
Starting Proof of Work for Difficulty Level: 1...
Valid Nonce Found: 7
Hash: 0a7e3b0b0fcf1f69516a...
Time Taken: 0.01 seconds
...
Starting Proof of Work for Difficulty Level: 10...
Valid Nonce Found: 6823153
Hash: 00000000002ab3f95f0b...
Time Taken: 15.4 seconds
```

## Observations
- **Higher difficulty levels** take longer to find a valid hash.
- **Lower difficulty levels** result in quick hash computation.
- The **nonce value** varies for each difficulty level.

## Conclusion
This implementation successfully demonstrates the Proof of Work mechanism, showing how computational effort increases as difficulty levels rise. This concept is fundamental in blockchain security, preventing spam and ensuring data integrity.

---
*Author: Ishan Gawande*

