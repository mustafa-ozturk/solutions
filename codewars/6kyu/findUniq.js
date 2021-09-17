// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
function findUniq(arr) {
    let obj = {};
    arr.forEach((num) => {
      if(!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    })
    return Object.entries(obj)[0][1] > Object.entries(obj)[1][1] ? 
      parseFloat(Object.entries(obj)[1][0]) : parseFloat(Object.entries(obj)[0][0]);
}
  