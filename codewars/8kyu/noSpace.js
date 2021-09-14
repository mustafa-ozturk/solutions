// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x) {
	return x
		.split("")
		.filter((elem) => elem != " ")
		.join("");
}
