// https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks) {
	return Math.floor(marks.reduce((acc, cval) => acc + cval) / marks.length);
}
