// https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
	return (
		yourPoints >
		classPoints.reduce((acc, cval) => acc + cval, 0) / classPoints.length
	);
}
