// https://www.codewars.com/kata/515e271a311df0350d00000f/
function squareSum(numbers) {
	if (numbers.length < 1) return 0;
	return numbers.reduce((acc, cval) => acc + Math.pow(cval, 2), 0);
}
