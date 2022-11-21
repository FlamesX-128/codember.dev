// This exercise was not planned to be done in JS but 
// someone from the midudev community needed help.

/**
 * @param {string} ascii 
 * @returns {string}
 */
const AsciiToString = (ascii) => {
    const parse = ascii.replaceAll(" ", "32")

    /** @type {number[]} */
    const bytes = []

    for (let i = 0; i < parse.length; i += 3) {
        let num = Number(parse.slice(i, i + 3))

        if (num > 255) {
            num = Number(parse.slice(i, i + 2))
            i--
        }

        bytes.push(num)
    }

    return bytes.map(
        (byte) => String.fromCharCode(byte)
    ).join("")
}

// Test
const file = Deno.readTextFileSync("./encrypted.txt")
console.log(AsciiToString(file))
