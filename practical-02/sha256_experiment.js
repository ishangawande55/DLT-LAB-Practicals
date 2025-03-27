const crypto = require('crypto');

// Function to generate SHA-256 hash
function generateSHA256Hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

// Aim 1: Implementation and Analysis of SHA-256
console.log("=== Aim 1: SHA-256 Hash Characteristics and Output Patterns ===");

// Test different inputs to analyze hash properties
const inputs = [
    "Ishan Gawande!",
    "Ishan Gawande", // Small change in input
    "ishan gawande!", // Case sensitivity test
    "Ishan Gawande! " // Extra space test
];

inputs.forEach(input => {
    console.log(`Input: "${input}"`);
    console.log(`SHA-256 Hash: ${generateSHA256Hash(input)}\n`);
});

// Aim 2: Determining Plaintext from SHA-256 Hash
console.log("=== Aim 2: Cracking SHA-256 Hash using Brute Force and Dictionary ===");

// Sample target hash (hash of "1234" for testing)
const targetPlaintext = "1234";
const targetHash = generateSHA256Hash(targetPlaintext);
console.log(`Target Hash to Crack: ${targetHash}\n`);

// Brute-force attack (trying 4-digit numbers 0000-9999)
function bruteForceAttack() {
    console.log("Attempting Brute Force Attack...");
    for (let i = 0; i <= 9999; i++) {
        let attempt = i.toString().padStart(4, '0'); // Ensure format "0000" to "9999"
        if (generateSHA256Hash(attempt) === targetHash) {
            console.log(`Brute-force found: ${attempt}\n`);
            return;
        }
    }
    console.log("Brute-force failed to find match.\n");
}

// Dictionary attack (using a predefined word list)
function dictionaryAttack(dictionary) {
    console.log("Attempting Dictionary Attack...");
    for (let word of dictionary) {
        if (generateSHA256Hash(word) === targetHash) {
            console.log(`Dictionary attack found: ${word}\n`);
            return;
        }
    }
    console.log("Dictionary attack failed to find match.\n");
}

// Sample dictionary list
const dictionary = ["password", "hello", "1234", "admin", "qwerty"];

// Run both attacks
bruteForceAttack();
dictionaryAttack(dictionary);