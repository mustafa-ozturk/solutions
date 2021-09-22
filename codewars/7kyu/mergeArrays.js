// https://www.codewars.com/kata/583af10620dda4da270000c5
function mergeArrays(a, b) {
    let newArr = [];
    for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
      if(a[i]) {
        newArr.push(a[i])
      }
      if(b[i]) {
        newArr.push(b[i])
      }
    }
    return newArr;
}