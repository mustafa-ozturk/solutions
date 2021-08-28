// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
var isSquare = function (n) {
	for (let i = 0; i <= n; i++) {
		if (i * i === n) {
			return true;
		}
	}
	return false; // fix me
};
