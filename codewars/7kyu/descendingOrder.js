// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n) {
	let highestString = n
		.toString()
		.split("")
		.map(Number)
		.sort((a, b) => b - a)
		.join("");
	return Number(highestString);
}
