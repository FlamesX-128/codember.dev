** The Spy Encryption Challenge **
A group of spies has discovered that their message encryption system is compromised.

They have found some passwords that do not comply with theEncryption Security Policy that was established when they were created.

To solve the problem, they have created a list (your entry to the challenge) of passwords (according to the corrupted database) and the security policy when that key was established.

Example of the list:

2-4 f: fgff
4-6 z: zzzsg
1-6 h: hhhhhh
Each line indicates, separated by :, the key policy and the key itself.

The key policy specifies the minimum and maximum number of times a given character must appear for the key to be valid. For example, 2-4 f means that the key must contain f at least 2 times and at most 4 times.

Knowing this, in the previous example, there are 2 valid keys but one is not:

The second key, zzzsg, is not valid; it contains the letter z 3 times, but needs at least 4. The first and third keys are valid: they contain the appropriate amount of f and h, respectively, according to their policies.

** Your challenge: **
Determine how many encryption keys are valid according to their policies.

** How to solve it **
1. Analyze the list of policies and encryption keys that you will find in this file: https://codember.dev/data/encryption_policies.txt

2. Create a program that returns the 42nd invalid key (of all the invalid keys, the 42nd in order of appearance). For example:
submit bqamidgewtbuz
