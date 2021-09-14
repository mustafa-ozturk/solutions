// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
function sum(numbers) {
	"use strict";
	if (numbers.length === 0) return 0;
	if (numbers.length === 1) return numbers[0];
	return numbers.reduce((acc, cval) => acc + cval, 0);
}
