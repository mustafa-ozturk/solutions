// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
var number = function (busStops) {
	return busStops.reduce((acc, cval) => {
		acc += cval[0];
		acc -= cval[1];
		return acc;
	}, 0);
};
