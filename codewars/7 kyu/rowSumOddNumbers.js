// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
	let obj = {};
	let lastNum = 0;
	for (let i = 1; i <= n; i++) {
		let arr = [];
		for (let j = 1; j <= i; j++) {
			if (i === 1) {
				arr.push(i);
			} else if (arr.length === 0) {
				arr.push(lastNum + 2);
			} else {
				arr.push(arr[arr.length - 1] + 2);
			}
		}
		obj[i] = arr;
		lastNum = arr[arr.length - 1];
		arr = [];
	}
	return obj[n].reduce((acc, cval) => acc + cval);
}
