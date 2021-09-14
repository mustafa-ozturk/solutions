// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
function evaporator(content, evap_per_day, threshold) {
	console.log(content, evap_per_day, threshold);
	let day = 0;
	let tresh = (content / 100) * threshold;
	while (content > tresh) {
		content -= (evap_per_day / 100) * content;
		day++;
	}

	return day;
}
