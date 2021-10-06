// https://www.codewars.com/kata/609eee71109f860006c377d1
function lastSurvivor(letters, coords) {
    letters = letters.split("");
    coords.forEach((coord) => letters.splice(coord, 1))
    return letters.join("");
}