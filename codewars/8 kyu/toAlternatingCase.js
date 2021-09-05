// https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
    const str = this;
    let newStr = "";
    
    for (let i = 0; i < str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
        newStr += str[i].toLowerCase();
      } else
        newStr += str[i].toUpperCase();
    }
    
    return newStr;
  }