// https://www.codewars.com/kata/51675d17e0c1bed195000001
function solution(digits) {
	let largest = 0;
	let num = 0;
	for (let i = 0; i < digits.length; i++) {
		num =
			digits[i] +
			digits[i + 1] +
			digits[i + 2] +
			digits[i + 3] +
			digits[i + 4];
		if (Number(num) > largest) {
			largest = Number(num);
		}
	}
	return largest;
}
