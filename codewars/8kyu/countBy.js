// https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
	let arr = [];
	let j = 0;
	for (let i = x; j < n; i += x) {
		arr.push(i);
		j++;
	}
	return arr;
}
