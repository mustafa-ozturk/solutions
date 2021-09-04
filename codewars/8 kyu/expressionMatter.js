// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
	let comb1 = a * (b + c);
	let comb2 = a * b * c;
	let comb3 = a + b * c;
	let comb4 = (a + b) * c;
	let comb5 = a + b + c;
	let arr = [comb1, comb2, comb3, comb4, comb5];
	return Math.max(...arr);
}
