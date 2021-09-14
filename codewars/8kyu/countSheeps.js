// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
	let numOfSheep = 0;
	arrayOfSheep.forEach((elem) => elem === true && numOfSheep++);
	return numOfSheep;
}
