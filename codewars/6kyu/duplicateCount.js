// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text) {
	let obj = {};
	let dups = {};
	text.toUpperCase()
		.split("")
		.forEach((char) => {
			if (!obj[char]) {
				obj[char] = true;
			} else {
				dups[char] = true;
			}
		});
	return Object.keys(dups).length;
}
