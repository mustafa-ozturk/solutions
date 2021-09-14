// https://www.codewars.com/kata/5663f5305102699bad000056
function mxdiflg(a1, a2) {
	if (a1.length === 0 || a2.length === 0) return -1;

	let maxdif = 0;

	a1.forEach((a1string) => {
		a2.forEach((a2string) => {
			let lengthdif = Math.abs(a1string.length - a2string.length);
			if (lengthdif > maxdif) {
				maxdif = lengthdif;
			}
		});
	});
	return maxdif;
}
