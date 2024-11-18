# Challenge 2: *Detecting Unauthorized Access*

I think ΩMEGA is trying to enter the system. For now, it’s a baby, and **it’s following very simple patterns** that we can detect, but it’s attempting to create admin passwords to access the terminal.

How can we detect these access attempts? It’s following these patterns:

- `It only uses lowercase letters and digits.`
- `It never uses digits after a letter (once letters appear, the password must continue with only letters).`
- `If it uses digits, it always uses them in equal or increasing order (if a 3 appears, it will never use a smaller number later).`
- `If it uses letters, it always uses them in alphabetical order, equal or increasing (if a "b" appears, it won’t use an "a" later, for example).`

Here are some examples to help you understand perfectly:

`1234     -> true`  
`abc      -> true`  
`aabbcc   -> true (repeats but always in ascending order)`  
`112233   -> true (repeats but always in ascending order)`  
`a123     -> false (a number after a letter)`  
`123abc   -> true`  
`dbce     -> false (a "d" followed by a "b")`

Access this `log.txt` with a list of attempts, and write a program to count how many have been invalid and how many valid. Submit the answer using the **submit** command.

For example, if there are 10 valid attempts and 5 invalid attempts, send the command **submit 10true5false**.
