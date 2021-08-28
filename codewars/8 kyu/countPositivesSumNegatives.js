// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
	let CountPos = 0;
	let SumNeg = 0;
	if (!Array.isArray(input)) {
		return [];
	}

	for (let i = 0; i < input.length; i++) {
		input[i] > 0 ? CountPos++ : (SumNeg += input[i]);
	}
	if (CountPos === 0 && SumNeg === 0) {
		return [];
	}
	return [CountPos, SumNeg];
}
