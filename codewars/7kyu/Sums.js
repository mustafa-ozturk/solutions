// https://www.codewars.com/kata/54df2067ecaa226eca000229
function f(n){
    if(!n || isNaN(n) || !Number.isInteger(n) || n < 0) return false;
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(i)
    }
    return arr.reduce((acc,cval) => acc + cval);
  };