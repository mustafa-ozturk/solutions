// https://www.codewars.com/kata/525f039017c7cd0e1a000a26
var palindromeChainLength = function (n) {
	let pal = false;
	let steps = 0;

	while (pal !== true) {
		if (n.toString() === n.toString().split("").reverse().join("")) {
			pal = true;
		} else {
			steps++;
			n += Number(n.toString().split("").reverse().join(""));
		}
	}

	return steps;
};
