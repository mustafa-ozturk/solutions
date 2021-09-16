// https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str){
    if(str === "") return "";
    let arr = str.split("");
    if(arr.includes("-")) {
      return str.split("-").map((char, index)=> {
        if(index > 0) {
          return char[0].toUpperCase() + char.substring(1,char.length)
        } else {
          return char
        }
      }).join("")
    } else {
      return str.split("_").map((char, index) => {
        if(index > 0) {
          return char[0].toUpperCase() + char.substring(1,char.length)
        } else {
          return char
        }
      }).join("")
    }
}