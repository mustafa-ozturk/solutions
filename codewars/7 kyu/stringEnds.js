// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending) {
	if (str.substring(str.length - ending.length, str.length) === ending) {
		return true;
	} else {
		return false;
	}
}
