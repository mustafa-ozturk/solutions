// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
function sortByLength(array) {
	return array.sort(function (a, b) {
		return a.length - b.length;
	});
}
