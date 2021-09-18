// https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
      if((text[i].charCodeAt() < 65 || text[i].charCodeAt() > 90) &&
         (text[i].charCodeAt() < 97 || text[i].charCodeAt() > 122)) {
        continue;
      }
      if(text[i] === text[i].toUpperCase()) {
        arr.push(text[i].charCodeAt() - 64);
      } 
      if(text[i] === text[i].toLowerCase()) {
        arr.push(text[i].charCodeAt() - 96);
      }
    }
    return arr.join(" ");
}