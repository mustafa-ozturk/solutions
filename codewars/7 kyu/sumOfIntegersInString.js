// https://www.codewars.com/kata/598f76a44f613e0e0b000026
function sumOfIntegersInString(s) {
	let sum = 0;
	let currentNum = "";
	for (let i = 0; i <= s.length; i++) {
		if (Number.isInteger(Number(s[i]))) {
			currentNum += s[i];
		} else {
			sum += Number(currentNum);
			currentNum = "";
		}
	}

	return sum;
}
