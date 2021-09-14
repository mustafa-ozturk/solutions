// https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
	return str
		.split("")
		.filter(
			(char) =>
				char.toLowerCase() !== "a" &&
				char.toLowerCase() !== "e" &&
				char.toLowerCase() !== "i" &&
				char.toLowerCase() !== "o" &&
				char.toLowerCase() !== "u"
		)
		.join("");
}
