// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push((i * i).toString());
	}
	let filteredArr = arr
		.join("")
		.split("")
		.filter((num) => num == d);

	return filteredArr.length;
}
