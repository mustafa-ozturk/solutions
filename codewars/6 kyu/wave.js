// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
	let newArr = [];
	if (str.length === 0) {
		return [];
	}
	for (let i = 0; i < str.length; i++) {
		let string = str;
		if (string[i] === " ") {
			continue;
		}
		string =
			string.substr(0, i) +
			string[i].toUpperCase() +
			string.substr(i + 1, str.length - i + 1);
		newArr.push(string);
	}
	return newArr;
}
