// https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
    while(n  >= 10) {
      n = n.toString().split("").reduce((acc,cval) => acc + Number(cval) ,0);
    }
    return n;
}