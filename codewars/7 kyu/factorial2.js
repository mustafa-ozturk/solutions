// https://www.codewars.com/kata/57a049e253ba33ac5e000212
function factorial(n) {
	if (n > 1) {
		return n * factorial(n - 1);
	}
	return 1;
}
