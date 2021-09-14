// https://www.codewars.com/kata/580a4734d6df748060000045
function isSortedAndHow(array) {
	let asc = array.slice().sort((a, b) => a - b);
	let desc = array.slice().sort((a, b) => b - a);
	if (array.join("") === asc.join("")) {
		return "yes, ascending";
	} else if (array.join("") === desc.join("")) {
		return "yes, descending";
	} else {
		return "no";
	}
}
