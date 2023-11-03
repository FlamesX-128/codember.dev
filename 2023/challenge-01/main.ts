function readAndCountWords(path: string) {
    const buffer = Deno.readFileSync(path);

    const words = new TextDecoder().decode(buffer).toLowerCase()
        .replace(/\n/, '')
        .split(' ')

    const wordCount: { [key: string]: number } = {};
    words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return wordCount;
}

function main() {
    const filename = 'message_01.txt';

    const wordCount = readAndCountWords(filename);
    const wordCountEntries = Object.entries(wordCount);

    console.log(
        wordCountEntries.map(([word, count]) => word + count).join('')
    )
}

if (import.meta.main) {
    main();
}
