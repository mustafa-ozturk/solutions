// https://www.codewars.com/kata/5b39e3772ae7545f650000fc
function removeDuplicateWords(s) {
	return [...new Set(s.split(" "))].join(" ");
}
