# Challenge 3: Following the trail of the ΩMEGA AI

The malicious AI ΩMEGA is causing problems in the company's control system. We are tracking its path and need to determine how many steps it has taken to exit (either to the left or to the right).

ΩMEGA has a list of jump instructions. Each instruction indicates the number of positions it must move in that same list.  

· `Positive number`: ΩMEGA moves forward by that number of positions.  
· `Negative number`: It moves backward by that number of positions.  
· `Zero`: It stays in the same position (but it counts as a movement).

**Important**: Every time ΩMEGA reads an instruction, it increments the value of that instruction by 1 after using it.

· `If it finds a 2, it moves forward 2 positions, and then that instruction becomes 3`.  
· `If it finds a 0, it stays in the same position, and then that instruction becomes 1`.  
· `If it finds a -3, it moves backward 3 positions, and then that instruction becomes -2`.  

Let me give you an example. I’ll indicate the current instruction where ΩMEGA is located in parentheses.

Instruction list: **1 2 4 1 -2**

- `Start:  (1) 2  4  1  -2   // → ΩMEGA starts at position 0`
- `Step 1:  2 (2) 4  1  -2   // → Moves forward one position, and the instruction becomes 2`
- `Step 2:  2  3  4 (1) -2   // → Moves forward 2 positions, and the instruction becomes 3`
- `Step 3:  2  3  4  2 (-2)  // → Moves forward one position, and the instruction becomes 2`
- `Step 4:  2  3 (4) 2  -1   // → Moves back two positions and ends up at -1`
- `Step 5:  2  3  4  2  -1   // → Moves forward 4 positions and escapes`
- `Result: 5`

Another example with an instruction list: **0 1 2 3 -1**

- `Start:  (0) 1  2  3  -1   // → ΩMEGA starts at position 0`
- `Step 1: (1) 1  2  3  -1   // → Doesn't move but increments the instruction by 1`
- `Step 2:  2 (1) 2  3  -1   // → Moves forward one position, and the instruction becomes 2`
- `Step 3:  2  2 (2) 3  -1   // → Moves forward one position, and the instruction becomes 2`
- `Step 4:  2  2  3  3 (-1)  // → Moves forward two positions, and the instruction becomes 3`
- `Step 5:  2  2  3 (3) 0    // → Moves back one position, and the instruction becomes 0`
- `Step 6:  2  2  3  4  0    // → Moves forward three positions and escapes`
- `Result: 6`

Another example exiting to the left: **1 -2 5**

- `Start: (1) -2  5   // → ΩMEGA starts at position 0`
- `Step 1: 2 (-2) 5   // → Moves forward one position, and the instruction becomes 1`
- `Step 2: 2  -1  5   // → Moves back two positions and exits to the left`
- `Result: 2`

Keep in mind that **if the list starts with a negative number**, ΩMEGA will exit to the left in just one step!

Access this [trace.txt]. It contains a list of movements performed by ΩMEGA, separated by line breaks. I need you to calculate the steps ΩMEGA needed to exit for **each instruction on each line**, **sum all the results**, and tell me the total number of steps ΩMEGA needed in total **and the result for the last line, separated by a hyphen**.

For example, if it needed 99 steps in total (summing all the steps for each line) and for the instruction in the last line it needed 13 steps, then the solution to submit would be **submit 99-13**.
