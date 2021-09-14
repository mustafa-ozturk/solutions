// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
	if (n === 1) return "1.00";
	if (n === 0) return "0.00";
	let divisor = 4;
	let total = 1;
	while (n !== 1) {
		n--;
		total += 1 / divisor;
		divisor += 3;
	}
	return total.toFixed(2);
}
