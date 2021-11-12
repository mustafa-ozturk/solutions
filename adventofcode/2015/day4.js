// https://adventofcode.com/2015/day/4
const crypto = require('crypto');
let num = 0;
const name = `abcdef${num}`;
const hash = crypto.createHash('md5').update(name).digest('hex');
let firstFive = '';
while (firstFive !== '000000') {
    num++;
    const name = `ckczppom${num}`;
    const hash = crypto.createHash('md5').update(name).digest('hex');
    firstFive = hash.substring(0, 6)
    console.log(name ,hash);
}

console.log('num', num); 
console.log('hash', hash);