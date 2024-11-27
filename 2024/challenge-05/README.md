# Challenge 5: Find ΩMEGA

The malicious AI ΩMEGA is cornered. After reviewing all the healthy nodes from the previous challenge... we have detected that ΩMEGA is hiding in one of them!  

We don’t know exactly which one... but we do know the rules ΩMEGA followed to hide:  

## Rules

1. The number must be **prime**.  
2. The **sum of its digits** must also be a **prime number**.  

## Task  

Write a program to:  

1. Find how many numbers in the list meet these conditions.  
2. Determine the **third number** in the list that meets these conditions when traversed in ascending order.  

## Example  

Given the list: `11, 12, 13, 14`  

- `11`: Prime. \(1 + 1 = 2\), which is prime → **Valid**  
- `12`: Not prime → **Invalid**  
- `13`: Prime. \(1 + 3 = 4\), which is not prime → **Invalid**  
- `14`: Not prime → **Invalid**  

Only **one number** meets the conditions, and it is `11`.  

## What to Do  

1. Analyze the list of nodes from the result of the previous challenge.  
2. Identify all numbers that meet the conditions.  
3. Find the **total count** of such numbers.  
4. Determine the **third number** that meets the conditions when sorted in ascending order.  

## Submission  

Send the total count and the third valid number, separated by a hyphen.  
For example, if there are 4 valid numbers and the third one is 11, submit:  
`submit 4-11`.  
