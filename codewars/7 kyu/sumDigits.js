// https://www.codewars.com/kata/52f3149496de55aded000410
function sumDigits(number) {
	const arr = Math.abs(number).toString().split("");
	let sum = 0;
	arr.forEach((elem) => (sum += parseInt(elem)));
	return sum;
}
