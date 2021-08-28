// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
	let century = 1;
	while (year - 100 > 0) {
		year -= 100;
		century++;
	}
	return century;
}
