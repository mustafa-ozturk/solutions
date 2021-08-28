// https://www.codewars.com/kata/542c0f198e077084c0000c2e
function getDivisorsCnt(n) {
	let total = 1;
	let i = 1;
	while (i !== n) {
		i++;
		if (n % i === 0) {
			total++;
		}
	}
	return total;
}
