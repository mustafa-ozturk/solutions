// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
function longestConsec(strarr, k) {
	let result = "";
	if (k > strarr.length) return result;
	for (let i = 0; i < strarr.length; i++) {
		let str = "";
		for (let j = 0; j < k; j++) {
			if (strarr[j + i] === undefined) break;
			str += strarr[j + i];
			if (str.length > result.length) {
				result = str;
			}
		}
	}

	return result;
}
