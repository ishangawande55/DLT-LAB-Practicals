# Shamir's Secret Sharing Implementation

## 📌 Introduction
Shamir's Secret Sharing (SSS) is a cryptographic technique used to split a secret into multiple shares. Only a minimum number of shares (threshold) is required to reconstruct the secret. This enhances security by preventing unauthorized access while ensuring the secret can be restored when necessary.

This implementation demonstrates how to split and reconstruct a secret using Shamir's Secret Sharing in **Node.js**.

## 🚀 Features
- Splits a secret into multiple shares
- Reconstructs the original secret using a subset of shares
- Demonstrates the concept of threshold-based secret recovery

## 🛠️ Prerequisites
Ensure you have **Node.js** installed on your system. You also need to install the required dependency:

```sh
npm install shamirs-secret-sharing
```

## 📜 Code Explanation

```javascript
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
```

## 🏃‍♂️ Running the Code
Run the script using:
```sh
node shamir_sss.js
```

## 🎯 Expected Output
```
 Secret Split into Shares:
Share 1: 801234abcd...
Share 2: 802345def0...
...

 Reconstructed Secret: MySuperSecretPassword123
Secret Successfully Recovered!
```

## 🔍 Explanation
1. **Splitting the Secret**: The secret is divided into 5 shares, requiring at least 3 to reconstruct it.
2. **Reconstructing the Secret**: Using any 3 out of 5 shares, the original secret is retrieved.
3. **Security Aspect**: If an attacker gets fewer than 3 shares, they cannot recover the secret.

## 🔐 Use Cases
- Securely storing encryption keys
- Multi-party access control
- Blockchain wallet recovery

## 📚 Further Reading
- [Shamir's Secret Sharing on Wikipedia](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing)

---
💡 **Note:** This is a simplified implementation for learning purposes. For real-world applications, use additional security measures!

