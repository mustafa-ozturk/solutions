// https://www.codewars.com/kata/5b180e9fedaa564a7000009a
function solve(s) {
	let up = 0;
	let low = 0;
	s.split("").forEach((elem) => (elem === elem.toUpperCase() ? up++ : low++));
	if (up > low) {
		return s.toUpperCase();
	} else {
		return s.toLowerCase();
	}
}
