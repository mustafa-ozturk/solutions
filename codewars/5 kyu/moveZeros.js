https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function (arr) {
    let newArr = [];
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== 0) {
        newArr.push(arr[i])
      } else {
        zeroCount++;
      }
    }
    for (let i = 1; i <= zeroCount; i++) {
      newArr.push(0);
    }
    return newArr;
  }