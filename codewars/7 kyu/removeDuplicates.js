// https://www.codewars.com/kata/5ba38ba180824a86850000f7
function solve(arr) {
	let newArr = [];
	for (let i = 1; i <= arr.length; i++) {
		if (!newArr.includes(arr[arr.length - i])) {
			newArr.push(arr[arr.length - i]);
		}
	}
	return newArr.reverse();
}
