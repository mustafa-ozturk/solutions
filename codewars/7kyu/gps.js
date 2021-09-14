// https://www.codewars.com/kata/56484848ba95170a8000004d/
function gps(s, x) {
	if (x.length === 0) return 0;
	let prev = 0;
	let avgHourlySpeed = x.map((distance) => {
		let avg = (3600 * (prev - distance)) / s;
		prev = distance;
		return Math.abs(avg);
	});
	return Math.floor(avgHourlySpeed.sort((a, b) => b - a)[0]);
}
