// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
function openOrSenior(data) {
	return data.map((person) => {
		if (person[0] >= 55 && person[1] > 7) {
			return "Senior";
		} else {
			return "Open";
		}
	});
}
