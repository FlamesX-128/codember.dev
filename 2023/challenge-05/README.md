** The Final Problem **
Finally, hackers have managed to access the database and have corrupted it. But it seems they have left a hidden message in the database. Can you find it?

Our database is in .csv format. The columns areid,username,email,age,location.

A user is only valid if:

- id: exists and is alphanumeric
- username: exists and is alphanumeric
- email: exists and is valid (follows the pattern user@domain.com)
- age: is optional but if it appears it is a number
- location: is optional but if it appears it is a text string
Examples:

Entry: 1a421fa,alex,alex9@gmail.com,18,Barcelona
Result: ✅ Valid

Entry: 9412p_m,maria,mb@hotmail.com,22,CDMX
Result: ❌ Invalid (id is not alphanumeric, the _ is extra)

Entry: 494ee0,madeval,mdv@twitch.tv,,
Result: ✅ Valid (age and location are optional)
Entry: 494ee0,madeval,twitch.tv,22,Montevideo
Result: ❌ Invalid (email is not valid)
** How to Solve It **
1. Analyze the list of database entries and detect the invalid ones:https://codember.dev/data/database_attacked.txt

2. Find the first letter of the username of all invalid users. Gather them in the order of appearance and uncover the hidden message. Then send it with submit. For example:
submit att4ck
