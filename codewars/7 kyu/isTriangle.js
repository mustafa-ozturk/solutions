// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0) {
		return false;
	}
	if (a + b > c && b + c > a && a + c > b) {
		return true;
	} else {
		return false;
	}
}
