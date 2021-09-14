// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
    let ods = [];
    let evens = [];
    for(let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evens.push(integers[i])
      } else {
        ods.push(integers[i])
      }
    }
    return ods.length > evens.length ? evens[0] : ods[0]; 
}