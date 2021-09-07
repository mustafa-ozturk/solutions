// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    let obj = {};
    A.forEach((elem) => obj[elem] ? obj[elem]++ : obj[elem] = 1);
    for (let i = 0; i < A.length; i++) {
       if(Object.values(obj)[i] % 2 !== 0) {
         return Number(Object.keys(obj)[i]);
       } 
    }
}