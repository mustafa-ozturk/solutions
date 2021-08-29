// https://www.codewars.com/kata/52829c5fe08baf7edc00122b
Array.prototype.numberOfOccurrences = function (num) {
	return this.filter((number) => number === num).length;
};
