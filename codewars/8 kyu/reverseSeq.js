// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = (n) => {
	let arr = [];
	while (n != -0) {
		arr.push(n);
		n--;
	}
	return arr;
};
