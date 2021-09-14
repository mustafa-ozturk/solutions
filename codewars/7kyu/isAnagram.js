// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
var isAnagram = function (test, original) {
	return (
		test
			.toLowerCase()
			.split("")
			.reduce((acc, cval) => {
				return acc + cval.charCodeAt(0);
			}, 0) ===
		original
			.toLowerCase()
			.split("")
			.reduce((acc, cval) => {
				return acc + cval.charCodeAt(0);
			}, 0)
	);
};
