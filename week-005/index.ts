function TheHungerGames(data: string[]) {
    const players = Object.assign({}, data)
    const size = Object.keys(players).length;

    let i = 0, j = 1

    while (Object.keys(players).length > 1) {
        while (players[i] === undefined || i === j) {
            i = i > size ? 0 : i + 1;
        }

        while (players[j] === undefined || i === j) {
            j = j > size ? 0 : j + 1
        }
    
        delete players[j]
        i += 2
    }

    return players
}

// Test
const resp = await fetch('https://codember.dev/mecenas.json', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

const data = await resp.json();

console.log(
    TheHungerGames(data)
)
