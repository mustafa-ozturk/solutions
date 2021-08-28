// https://www.codewars.com/kata/535474308bb336c9980006f2
var greet = function (name) {
	return `Hello ${name
		.split("")
		.map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
		.join("")}!`;
};
