// https://www.codewars.com/kata/554ca54ffa7d91b236000023
function deleteNth(arr, n) {
	let newArr = [];
	arr.forEach((elem) => {
		if (newArr.filter((e) => e === elem).length < n) {
			newArr.push(elem);
		}
	});
	return newArr;
}
