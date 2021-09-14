// https://www.codewars.com/kata/5bb904724c47249b10000131
function points(games) {
	return games.reduce((acc, cval) => {
		if (cval[0] > cval[2]) {
			acc += 3;
		}
		if (cval[0] === cval[2]) {
			acc += 1;
		}
		return acc;
	}, 0);
}
