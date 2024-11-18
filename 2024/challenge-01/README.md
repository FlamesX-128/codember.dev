# Challenge 1: _Get access to the terminal!_

We’re in trouble. **AI ΩMEGA is out of control**. Luckily, I managed to add a password to prevent it from accessing this terminal. The system isn’t difficult, but it should buy us enough time.

I’ll give you a list of numbers and the movements you need to make on these numbers. Imagine those combination locks that use numbers.

The number on the left is the starting combination, and the strings of text on the right are the movements you need to make.

We always start with the first number on the left. The movements are:

**R (Right)**: `move to the next digit`
**L (Left)**: `move to the previous digit`
**U (Up)**: `increase this digit`
**D (Down)**: `decrease this digit`

If we reach the far right and get an **R**, we go back to the first digit. If we receive **L** and we’re at the first digit, we go to the last one. If the current digit is **9** and we receive an **U**, it will change to **0**. If it’s **0** and we get a **D**, it will change to **9**.

Do you get it? It’s really important that you understand it! Here are some examples:

`000 URURD -> 119`  
`1111 UUURUUU -> 4411`  
`9999 LULULULD -> 8000`

Got it? Well, to unlock the terminal, you need to send the number after performing this combination:

528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR

Hurry up! We don’t have much time!
