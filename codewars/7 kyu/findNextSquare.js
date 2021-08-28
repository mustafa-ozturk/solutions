// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq) {
	if (Math.sqrt(sq) % 1 !== 0) {
		return -1;
	} else {
		return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
	}
}
