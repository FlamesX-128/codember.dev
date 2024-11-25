const path = import.meta.resolve('./trace.txt');
const file = Deno.readTextFileSync(
    new URL(path)
);

function process(instructions: number[]): number {
    let position = 0;
    let steps = 0;

    while (
        position >= 0 && position < instructions.length
    ) {
        position += instructions[position]++;
        steps++;
    }

    return steps;
}

const data: number[] = [];

for (const line of file.split('\n')) {
    const instructions = line.split(/\s+/).map(Number);
    const result = process(instructions);

    data.push(result);
}

console.log(
    `Solution: ${data.reduce((acc, curr) => acc + curr, 0)}-${data[data.length - 1]}`
)
