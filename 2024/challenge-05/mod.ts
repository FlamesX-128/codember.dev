const path = import.meta.resolve("./nodes.txt");
const file = Deno.readTextFileSync(
    new URL(path),
);

function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumOfDigits(n: number): number {
    return n
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

function findOmega(numbers: number[]): string {
    const sortedNumbers = numbers.sort((a, b) => a - b);

    const validNumbers: number[] = [];
    for (const number of sortedNumbers) {
        if (isPrime(number) && isPrime(sumOfDigits(number))) {
            validNumbers.push(number);
        }
    }

    const total = validNumbers.length;
    const third = validNumbers[2]

    return `${total}-${third}`;
}

const nodes: number[] = JSON.parse(file);

console.log(findOmega(nodes));
