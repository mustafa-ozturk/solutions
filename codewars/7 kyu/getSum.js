// https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum(a, b) {
	let arr = [];
	let lowEnd = a < b ? a : b;
	let highEnd = a > b ? a : b;
	for (var i = lowEnd; i <= highEnd; i++) {
		arr.push(i);
	}
	let sum = 0;
	arr.forEach((elem) => (sum += elem));
	return sum;
}
