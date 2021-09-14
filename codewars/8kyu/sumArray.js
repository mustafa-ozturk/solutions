// https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
	if (!array || array.length < 3) return 0;
	let sorted = array.sort((a, b) => a - b);
	sorted.shift();
	sorted.pop();
	return sorted.reduce((acc, cval) => acc + cval);
}
