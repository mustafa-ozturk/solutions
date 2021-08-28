// https://www.codewars.com/kata/5ac6932b2f317b96980000ca
function minValue(values) {
	let filtered = values.filter((item, index) => {
		return values.indexOf(item) === index;
	});
	return parseInt(filtered.sort((a, b) => a - b).join(""));
}
