// https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
    let howfar = 0;
    let prev;
    for (let i = 0; i < walk.length; i++) {
      if (i === 0) {
        howfar++;
        prev = walk[i];
        continue;
      }
      if (prev === "n" && walk[i] !== "s" || prev === "s" && walk[i] !== "n") {
        howfar++
        prev = walk[i]
        continue;
      }
      if (prev === "e" && walk[i] !== "w" || prev === "w" && walk[i] !== "e") {
        howfar++
        prev = walk[i]
        continue;
      }
      howfar--
    }
    console.log(howfar);
    if(howfar === 0 && walk.length === 10) {
      return true
    }
    return false
}
