# Challenge 4: Avoiding Network Chaos

The malicious AI ΩMEGA is attacking the company's network of nodes! Each node has a unique identifier, which is an integer, and is connected to other nodes, forming a complex structure.  
ΩMEGA is destroying all networks consisting of 3 or more connected nodes. We need to determine which nodes are safe from its attacks!  

## How does the network work?  

The network is represented as a list of pairs of connections between nodes. For example:  

**Input:** `[[1, 2], [2, 3], [4, 5]]`  
This means:  

- Node 1 is connected to node 2.  
- Node 2 is connected to node 3.  
- Node 4 is connected to node 5.  

In this case:  

- Nodes 1, 2, and 3 form a connected group.  
- Nodes 4 and 5 form another connected group.  

### Example 1  

**Input:** `[[1, 2], [2, 3], [4, 5]]`  

- Networks: `[1, 2, 3]` and `[4, 5]`  
- ΩMEGA destroys the network `[1, 2, 3]`  
- Safe nodes: `4` and `5`  
**Output:** `4, 5`  

### Example 2  

**Input:** `[[1, 2], [2, 3], [3, 4]]`  

- Networks: `[1, 2, 3, 4]`  
- ΩMEGA destroys the network `[1, 2, 3, 4]`  
- Safe nodes: none  
**Output:** `[]`  

### Example 3  

**Input:** `[[4, 6], [7, 9], [10, 12], [12, 16]]`  

- Networks: `[4, 6]`, `[7, 9]`, `[10, 12, 16]`  
- ΩMEGA destroys the network `[10, 12, 16]`  
- Safe nodes: `4, 6, 7, 9`  
**Output:** `4, 6, 7, 9`  

## What should you do?  

Access the file `network.txt`, which contains a list of connections between nodes. Submit the list of nodes (sorted in ascending order, comma-separated, and without spaces) that have been saved from the attack. For example, from Example 1, you would send to the terminal:  
`submit 4,5`.  

**Hint:** There are 70 safe nodes... now you just need to figure out which ones!  
