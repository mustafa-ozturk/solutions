// https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons) {
	if (bullets === 0 && dragons === 0) return true;
	if (bullets / dragons >= 2) return true;
	return false;
}
