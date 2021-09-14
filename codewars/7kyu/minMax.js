// https://www.codewars.com/kata/559590633066759614000063
function minMax(arr) {
	if (arr.length === 1) {
		return [arr[0], arr[0]];
	}
	return arr
		.slice()
		.sort((a, b) => a - b)
		.filter((num, index) => {
			if (index === 0 || index === arr.length - 1) {
				return num;
			}
		});
}
