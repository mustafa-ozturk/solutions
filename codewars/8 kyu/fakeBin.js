// https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x) {
	return x
		.split("")
		.map((num) => (num < 5 ? (num = 0) : (num = 1)))
		.join("");
}
