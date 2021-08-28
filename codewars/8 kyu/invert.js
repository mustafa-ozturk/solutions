// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
	return array.map((num) => (num < 0 ? Math.abs(num) : -Math.abs(num)));
}
