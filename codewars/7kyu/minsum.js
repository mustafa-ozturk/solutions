// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
function sumOfMinimums(arr) {
    let mins = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]; j++) {
        console.log(arr[i].sort((a,b) => a - b)[0])
        mins.push(arr[i].sort((a,b) => a - b)[0])
        break;
      }
    }
    
    return mins.reduce((acc,cval) => acc + cval,0)
}
