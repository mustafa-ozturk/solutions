// https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
	let sum = 0;
	array.forEach((elem) => (sum += elem));
	return sum % 2 === 0 ? "even" : "odd";
}
