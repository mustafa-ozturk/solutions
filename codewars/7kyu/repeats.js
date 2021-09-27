// https://www.codewars.com/kata/59f11118a5e129e591000134
function repeats(arr) {
    let obj = {};
    arr.forEach(num => obj[num] ? obj[num]++ : obj[num] = 1);
    return Object.entries(obj).map(numArr => numArr[1] === 1 ? Number(numArr[0]) : 0).reduce((acc, cval) => acc + cval, 0);
};