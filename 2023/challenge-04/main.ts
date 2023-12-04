import * as path from 'path';

function charAppearsOnlyOneTime(alphanumeric: string, char: string): boolean {
    return alphanumeric.split(char).length === 2;
}

function main() {
    const filePath = path.join(
        Deno.cwd(), '2023', 'challenge-04', 'files_quarantine.txt'
    );

    const file = Deno.readTextFileSync(filePath);
    const data = file.split('\n');

    const res = data.reduce((acc: string[], substr: string) => {
        const [alphanumeric, checksum] = substr.split('-');

        const genCheckSum = Array.from(alphanumeric)
            .filter(
                (char) => charAppearsOnlyOneTime(alphanumeric, char)
            )
            .join('');

        if (checksum === genCheckSum) {
            acc.push(checksum);
        }

        return acc;
    }, []);

    console.log(res[32]);
}

if (import.meta.main) {
    main();
}
