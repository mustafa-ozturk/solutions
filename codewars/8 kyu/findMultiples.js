// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit) {
	let arr = [];
	for (let i = 1; i <= limit / integer; i++) {
		arr.push(i * integer);
	}
	return arr;
}
