// https://www.codewars.com/kata/56541980fa08ab47a0000040
function printerError(s) {
	const valid = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
	];
	let count = 0;
	s.split("").forEach((elem) => !valid.includes(elem) && count++);
	return `${count}/${s.length}`;
}
