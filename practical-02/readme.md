# SHA-256 Hashing and Cracking Experiment

## Overview
This experiment demonstrates the implementation and analysis of the SHA-256 hash function, along with brute-force and dictionary attacks to attempt recovering a plaintext from a given hash. It covers two main aims:

1. **Implementation and Analysis of SHA-256:** Understanding SHA-256 characteristics and how small changes in input affect the hash output.
2. **Cracking SHA-256 Hashes:** Using brute-force and dictionary methods to attempt reversing a SHA-256 hash.

## Prerequisites
Ensure you have **Node.js** installed to run this script.

## Installation
1. Clone this repository or create a new directory and navigate to it:
   ```sh
   git clone https://github.com/ishangawande55/DLT-LAB-Practicals.git
   cd DLT-LAB-Practicals
   ```
2. Install necessary dependencies (if any):
   ```sh
   npm install
   ```

## How It Works
### **1. SHA-256 Hashing Characteristics**
- The script hashes multiple variations of the same string to demonstrate SHA-256’s sensitivity to small input changes.
- A small modification in the input (like a space or case change) results in a completely different hash.
- The hashes are printed in hexadecimal format.

### **2. Cracking SHA-256 Hashes**
#### **Brute-Force Attack**
- Tries all 4-digit numeric combinations (`0000` to `9999`).
- If a matching hash is found, it prints the plaintext.
- Inefficient for longer passwords but works for small keyspaces.

#### **Dictionary Attack**
- Uses a predefined wordlist (common passwords) to check if any match the target hash.
- If a match is found, it prints the plaintext password.
- More efficient than brute force if the password exists in the wordlist.

## Running the Experiment
Execute the script with:
```sh
node practical-02/sha256_experiment.js
```

### Expected Output Example
```
=== Aim 1: SHA-256 Hash Characteristics and Output Patterns ===
Input: "Ishan Gawande!"
SHA-256 Hash: abc123...

Input: "Ishan Gawande"
SHA-256 Hash: def456...

=== Aim 2: Cracking SHA-256 Hash using Brute Force and Dictionary ===
Target Hash to Crack: 03ac674216f3e15c761ee1a5e255f067...

Attempting Brute Force Attack...
Brute-force found: 1234

Attempting Dictionary Attack...
Dictionary attack found: 1234
```

## Key Learnings
- SHA-256 is **deterministic** (same input always gives the same hash).
- Even a small change in input drastically alters the hash output (**avalanche effect**).
- **Brute-force attacks** work but are time-consuming for long passwords.
- **Dictionary attacks** are faster if the password exists in a predefined list.

## Limitations
- Brute-force attacks become infeasible for longer or more complex passwords.
- Dictionary attacks depend on the quality of the wordlist.
- SHA-256 is cryptographically secure; reversing complex hashes is computationally impractical without weaknesses or shortcuts.

## Conclusion
This experiment highlights both the **strengths** of SHA-256 in security and the **challenges** in recovering a plaintext from its hash. Understanding these principles is crucial for cryptographic applications.

---
📌 **Author:** Ishan Gawande  
📌 **License:** ISC  
📌 **Repository:** [GitHub](https://github.com/ishangawande55/DLT-LAB-Practicals)  

