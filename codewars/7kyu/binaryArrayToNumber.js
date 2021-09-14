// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
	let sum = 0;
	let times = 1;
	arr.reverse().forEach((elem) => {
		sum += elem * times;
		times *= 2;
	});
	return sum;
};
