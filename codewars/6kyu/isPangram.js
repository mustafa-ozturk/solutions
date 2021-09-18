// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string){
    string = string.toUpperCase();
    let obj = {};
    for (let i = 0; i < string.length; i++) {
      if((string[i].charCodeAt() < 65 || string[i].charCodeAt() > 90) &&
           (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122)) {
          continue;
        }
      if(!obj[string[i]]) {
        obj[string[i]] = 1;
      } else {
        obj[string[i]]++;
      }
    }
    return Object.keys(obj).length >= 26;
}