// https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
    let arr = [];
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if(words[i][0] === "!" || words[i][0] === "?") {
        arr.push(words[i][0])
        continue;
      }
      arr.push(words[i].substring(1, words[i].length) + words[i][0] + "ay");
    }
    return arr.join(" ")
  }