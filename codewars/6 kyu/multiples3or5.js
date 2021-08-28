// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number) {
	if (number < 0) return 0;
	let nums = {};
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			nums[i] = true;
		}
	}
	if (Object.keys(nums).length <= 0) return 0;
	return parseInt(
		Object.keys(nums).reduce((acc, cval) => parseInt(acc) + parseInt(cval))
	);
}
