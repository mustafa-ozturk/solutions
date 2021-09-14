// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd
function mygcd(a, b) {
	let d = b;
	while (b !== 0) {
		b = a % b;
		a = d;
		d = b;
	}
	return a;
}
