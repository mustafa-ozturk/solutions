// https://www.codewars.com/kata/56b7f2f3f18876033f000307
function inAscOrder(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr.slice().sort((a, b) => a - b)[i] !== arr[i]) {
			return false;
		}
	}
	return true;
}
