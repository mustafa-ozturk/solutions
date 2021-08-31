// https://www.codewars.com/kata/577a98a6ae28071780000989
var min = function (list) {
	return list.sort((a, b) => a - b)[0];
};

var max = function (list) {
	return list.sort((a, b) => b - a)[0];
};
