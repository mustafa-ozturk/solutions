// https://www.codewars.com/kata/5813d19765d81c592200001a
function dontGiveMeFive(start, end) {
	let count = 0;
	for (let i = start; i <= end; i++) {
		if (!i.toString().split("").includes("5")) {
			count++;
		}
	}
	return count;
}
