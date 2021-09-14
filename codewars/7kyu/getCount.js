// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
	var vowelsCount = 0;

	str.split("").forEach((char) => {
		if (
			char === "a" ||
			char === "e" ||
			char === "i" ||
			char === "o" ||
			char === "u"
		) {
			vowelsCount++;
		}
	});

	return vowelsCount;
}
