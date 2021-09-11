// https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(p){
    let parens = p.split("");
    for(let i = 0; i < parens.length; i++) {
        for (let j = 1; j <= parens.length + 1; j++) {
          if(parens[i] === '(' && parens[i + j] === ')') {
            parens.splice(i,1);
            parens.splice(i + j - 1,1);
            i--;
            break;
          } 
      }
    }
    return parens.length === 0;
}