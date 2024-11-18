const path = import.meta.resolve('./log.txt');
const file = Deno.readTextFileSync(
    new URL(path)
);

function compare(chars: string): boolean {
    let previousNumber: number | undefined;
    let previousLetter: string | undefined;

    for (const char of chars) {
        if (/\d/.test(char)) {
            const number = +char;

            if (previousLetter) {
                return false;
            }

            if (
                (previousNumber !== undefined) &&
                (previousNumber > number)
            ) {
                return false;
            }

            previousNumber = number;
        } else if (/[a-z]/.test(char)) {
            if (
                (previousLetter !== undefined) &&
                (previousLetter.localeCompare(char) > 0)
            ) {
                return false;
            }

            previousLetter = char;
        } else {
            return false;
        }
    }

    return true;
}

const logs = file.split('\n');
let count = 0;

for (const log of file.split('\n')) {
    count += +compare(log)
}

console.log(`${count}true${logs.length - count}false`);
