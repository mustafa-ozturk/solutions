// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
function findShort(s) {
	return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}
