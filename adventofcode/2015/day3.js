// https://adventofcode.com/2015/day/3
let input = '';
// let input = '^>v<';
input = input.split('');

function part1() {
    let positions = [];
    let y = 0;
    let x = 0;
    positions.push(`${x},${y}`);

    let houseWithAtleastOnePresent = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "^") {
            x++;
        }
        if (input[i] === "v") {
            x--;
        }
        if (input[i] === ">") {
            y++;
        }
        if (input[i] === "<") {
            y--;
        }

        if( !positions.includes(`${x},${y}`) ) {
            houseWithAtleastOnePresent++;
        }
        positions.push(`${x},${y}`);
    }
    return houseWithAtleastOnePresent;
}
console.log(part1());


