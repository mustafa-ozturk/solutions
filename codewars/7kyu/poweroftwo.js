// https://www.codewars.com/kata/534d0a229345375d520006a0
function isPowerOfTwo(n) {
	if (n === 1) return true;
	if (n === 0) return false;
	while (n > 2) {
		n = n / 2;
	}
	return n % 2 === 0;
}
