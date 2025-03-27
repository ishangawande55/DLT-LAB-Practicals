const sss = require('shamirs-secret-sharing'); // Import the correct Shamir's Secret Sharing library

// Secret to be split (converted to Buffer)
const secret = Buffer.from("MySuperSecretPassword123", 'utf8');
const totalShares = 5;  // Total shares to generate
const threshold = 3;     // Minimum shares required to reconstruct the secret

// Split the secret into shares
const shares = sss.split(secret, { shares: totalShares, threshold: threshold });

console.log("\n Secret Split into Shares:");
shares.forEach((share, index) => console.log(`Share ${index + 1}: ${share.toString('hex')}`));

// Select threshold number of shares to reconstruct the secret
const selectedShares = shares.slice(0, threshold); // Using first `threshold` shares

// Reconstruct the secret
const recoveredSecret = sss.combine(selectedShares).toString('utf8');

console.log("\n Reconstructed Secret:", recoveredSecret);
console.log(recoveredSecret === "MySuperSecretPassword123" ? "Secret Successfully Recovered!" : "Secret Recovery Failed!");