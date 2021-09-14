// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
	let s3 = s1 + s2;
	let uniqueObj = {};
	s3.split("").forEach((char) => {
		if (!uniqueObj[char]) {
			uniqueObj[char] = char;
		}
	});
	return Object.keys(uniqueObj).sort().join("");
}
