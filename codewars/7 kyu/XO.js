// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
	let x = 0;
	let o = 0;
	str.toLowerCase()
		.split("")
		.forEach((char) => (char === "x" && x++) || (char === "o" && o++));
	console.log(str, x, o);
	return x === o ? true : false;
}
