// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string){
    let words = string.split(" ").map(word => {
      if(word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    return words.join(" ")
}