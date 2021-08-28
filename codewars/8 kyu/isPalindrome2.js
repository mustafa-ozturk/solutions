// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
function isPalindrome(x) {
	if (x.length === 0) return true;
	for (let i = 0; i <= x.length / 2; i++) {
		if (x[i].toUpperCase() !== x[x.length - i - 1].toUpperCase()) {
			return false;
		}
	}
	return true;
}
