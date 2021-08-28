// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
function factorial(n) {
	if (n > 12 || n < 0) {
		throw RangeError();
	}
	if (n > 1) {
		return n * factorial(n - 1);
	}
	return 1;
}
