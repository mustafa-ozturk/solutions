// https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num) {
	const arrayOfStrings = num.toString().split("");
	let result = parseInt(
		arrayOfStrings.map((elem) => parseInt(elem) * parseInt(elem)).join("")
	);
	return result;
}
