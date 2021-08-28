// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
	const sortedNums = numbers.sort((a, b) => a - b);
	return sortedNums[0] + sortedNums[1];
}
