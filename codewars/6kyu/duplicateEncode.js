// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    word = word.toLowerCase();
      let chars = {};
      for (let i = 0; i < word.length; i++) {
        if(!chars[word[i]]) {
          chars[word[i]] = 1;
        } else {
          chars[word[i]]++
        }
      }
    return word.split("").map(char => {
      if(chars[char] > 1) {
        return ')'
      } else {
        return '('
      }
    }).join("");
}
  