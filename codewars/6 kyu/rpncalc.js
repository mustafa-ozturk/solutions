// https://www.codewars.com/kata/52f78966747862fc9a0009ae
function calc(expr) {
	if (expr === "") return 0;
	let exprArr = expr.split(" ");

	let arr = [];
	for (let i = 0; i < exprArr.length; i++) {
		if (
			exprArr[i] === "+" ||
			exprArr[i] === "*" ||
			exprArr[i] === "-" ||
			exprArr[i] === "/"
		) {
			let firstVal = arr.pop();
			let secondVal = arr.pop();
			switch (exprArr[i]) {
				case "+":
					arr.push(parseFloat(secondVal + firstVal));
					break;
				case "*":
					arr.push(parseFloat(secondVal * firstVal));
					break;
				case "-":
					arr.push(parseFloat(secondVal - firstVal));
					break;
				case "/":
					arr.push(parseFloat(secondVal / firstVal));
					break;
			}
		} else {
			arr.push(parseFloat(exprArr[i]));
		}
	}
	return arr[0];
}
