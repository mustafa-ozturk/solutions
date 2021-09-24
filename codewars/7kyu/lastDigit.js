// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0
function lastDigit(n, d) {
    n = n.toString().split("");
    n.splice(0, n.length - d);
    return d > 0 ? n.map(Number) : [];
}