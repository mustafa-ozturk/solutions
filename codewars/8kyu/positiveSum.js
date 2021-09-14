// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
	let posNums = arr.filter((elem) => elem > 0);
	let num = 0;
	posNums.forEach((elem) => (num += elem));
	return num;
}
