// https://www.codewars.com/kata/5250a89b1625e5decd000413
var flatten = function (array) {
	return array.reduce((acc, cval) => acc.concat(cval), []);
};
