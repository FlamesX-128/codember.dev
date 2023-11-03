const required_keys = ["usr", "eme", "psw", "age", "loc", "fll"];
const fileData = Deno.readTextFileSync("users.txt");

const data = fileData.split(/\n\n|\r\r/)
    .map(
        (line: string) => line.split(/\n|\r| /)
    )
    .map(
        (line: string[]) => line.map((item: string) => {
            const [key, value] = item.split(":");

            return { [key]: value };
        })
    )
    .filter(
        (user: { [ key: string ]: string }[]) => required_keys.every(
            (key: string) => user.some((item) => key in item))
        );

console.log(data.length, data[data.length - 1]);
