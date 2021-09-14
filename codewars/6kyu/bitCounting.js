// https://www.codewars.com/kata/526571aae218b8ee490006f4
var countBits = function(n) {
    return n
    .toString(2)
    .split("")
    .reduce((acc,cval) => acc + Number(cval) ,0);
};