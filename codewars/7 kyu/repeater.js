// https://www.codewars.com/kata/585a1a227cb58d8d740001c3
function repeater(string, n) {
	let newstring = "";
	for (let i = 0; i < n; i++) {
		newstring += string;
	}
	return newstring;
}
