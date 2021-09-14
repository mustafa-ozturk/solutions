// https://www.codewars.com/kata/57a5015d72292ddeb8000b31
function isPalindrome(line) {
	line = line.toString();
	for (let i = 0; i < line.length / 2; i++) {
		if (line[i] != line[line.length - i - 1]) {
			return false;
		}
	}
	return true;
}
