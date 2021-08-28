// https://www.codewars.com/kata/563f037412e5ada593000114
function calculateYears(principal, interest, tax, desired) {
	if (principal === desired) return 0;

	let sum = 0;
	let year = 0;

	while (sum < desired) {
		if (year === 0) {
			let profits = principal + principal * interest;
			let currentTax = principal * interest * tax;
			sum = profits - currentTax;
			year++;
		} else {
			let profits = sum + sum * interest;
			let currentTax = sum * interest * tax;
			sum = profits - currentTax;
			year++;
		}
	}

	return year;
}
