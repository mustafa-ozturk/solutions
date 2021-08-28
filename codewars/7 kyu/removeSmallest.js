// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
function removeSmallest(numbers) {
	return numbers.slice().filter((num, index) => {
		return (
			index !==
				numbers.indexOf(numbers.slice().sort((a, b) => a - b)[0]) && num
		);
	});
}
