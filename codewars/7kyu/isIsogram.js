// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str) {
	str = str.toLowerCase();
	let obj = {};
	str.split("").forEach((char) => {
		obj[char] = char;
	});
	return Object.keys(obj).join("") === str ? true : false;
}
