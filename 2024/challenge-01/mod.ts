const password = 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR';

const clave: number[] = "528934712834".split('').map(Number);
let pointer = 0;

const handler: Record<string, () => void> = {
    'R': () => {
        pointer = (pointer + 1) % clave.length;
    },
    'L': () => {
        pointer = (pointer - 1 + clave.length) % clave.length;
    },
    'U': () => {
        clave[pointer] = (clave[pointer] + 1) % 10;
    },
    'D': () => {
        clave[pointer] = (clave[pointer] + 9) % 10;
    },
};

for (const symbol of password) {
    handler[symbol]();
}

console.log(clave.join(''));
