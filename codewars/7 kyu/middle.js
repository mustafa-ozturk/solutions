// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
var gimme = function (inputArray) {
	return inputArray.indexOf(inputArray.slice().sort((a, b) => a - b)[1]);
};
