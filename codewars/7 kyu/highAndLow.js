// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
	let sortedNums = numbers
		.split(" ")
		.map(Number)
		.sort((a, b) => b - a);
	return sortedNums[0] + " " + sortedNums[sortedNums.length - 1];
}
