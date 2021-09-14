// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3
function sortGiftCode(code) {
	return code
		.split("")
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join("");
}
