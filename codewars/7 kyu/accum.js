// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
	let string = "";
	s = s.toLowerCase();
	s.split("").forEach((char, index) => {
		for (let i = 0; i <= index; i++) {
			if (i === 0) {
				string += char.toUpperCase();
			} else {
				string += char;
			}
		}
		if (index !== s.length - 1) {
			string += "-";
		}
	});

	return string;
}
