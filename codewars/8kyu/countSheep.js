// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
var countSheep = function (num) {
	let string = "";
	for (let i = 1; i <= num; i++) {
		string += `${i} sheep...`;
	}
	return string;
};
