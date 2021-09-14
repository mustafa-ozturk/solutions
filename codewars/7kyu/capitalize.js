// https://www.codewars.com/kata/59cfc000aeb2844d16000075
function capitalize(s) {
	let arr = [];
	arr.push(
		s
			.split("")
			.map((char, index) =>
				index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
			)
			.join("")
	);
	arr.push(
		s
			.split("")
			.map((char, index) =>
				index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase()
			)
			.join("")
	);

	return arr;
}
