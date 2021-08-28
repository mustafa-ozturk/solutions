// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
function reverseLetter(str) {
	return str
		.split("")
		.filter(
			(char) =>
				(char >= "a" && char <= "z") || (char >= "A" && char <= "Z")
		)
		.reverse()
		.join("");
}
