// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/
function flattenAndSort(array) {
	return array
		.reduce((acc, cval) => acc.concat(cval), [])
		.sort((a, b) => a - b);
}
