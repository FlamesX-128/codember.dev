const getMostRepeatedColor = (colors: string[]): [number, string] => {
    let c1 = colors[0],
        c2 = colors[1];

    let maxCount = 0,
        count = 2;

    const invertColors = (c: string): void => { c1 = c2; c2 = c; };

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];

        if (c1 === color && c1 !== c2) {
            invertColors(color);
            count++;

            continue;
        }

        if (count > maxCount) maxCount = count;
    
        invertColors(color);
        count = 2;
    }

    return [maxCount, colors[maxCount]];
};

// Test

const fileData = Deno.readTextFileSync("colors.json");
const colors: string[] = JSON.parse(fileData);

console.log(
    getMostRepeatedColor(colors)
);
