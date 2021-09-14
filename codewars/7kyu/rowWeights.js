// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array) {
	let team1 = 0;
	let team2 = 0;
	array.forEach((elem, index) => {
		if ((index + 1) % 2 !== 0) {
			team1 += elem;
		} else {
			team2 += elem;
		}
	});
	return [team1, team2];
}
