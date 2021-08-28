// https://www.codewars.com/kata/5390bac347d09b7da40006f6
String.prototype.toJadenCase = function () {
	const result = this.valueOf()
		.split(" ")
		.map((elem) => elem[0].toUpperCase() + elem.substr(1, elem.length))
		.join(" ");
	return result;
};
