// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
function reverseNumber(n) {
    let reversed;
    if(n < 0) {
      reversed = -Number(Math.abs(n).toString().split("").reverse().join(""));
    } else {
      reversed = Number(n.toString().split("").reverse().join(""));
    }
    return reversed;
}