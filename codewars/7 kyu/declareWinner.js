// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
function declareWinner(fighter1, fighter2, firstAttacker) {
	if (fighter1.name === firstAttacker) {
		let round = 1;
		while (fighter1.health > 1 || fighter2.health > 1) {
			if (round % 2 !== 0) {
				if (fighter2.health - fighter1.damagePerAttack < 1) {
					return fighter1.name;
				}
				fighter2.health -= fighter1.damagePerAttack;
				round++;
			} else {
				if (fighter1.health - fighter2.damagePerAttack < 1) {
					return fighter2.name;
				}
				fighter1.health -= fighter2.damagePerAttack;
				round++;
			}
		}
	} else if (fighter2.name === firstAttacker) {
		let round = 1;
		while (fighter1.health > 1 || fighter2.health > 1) {
			if (round % 2 !== 0) {
				if (fighter1.health - fighter2.damagePerAttack < 1) {
					return fighter2.name;
				}
				fighter1.health -= fighter2.damagePerAttack;
				round++;
			} else {
				if (fighter2.health - fighter1.damagePerAttack < 1) {
					return fighter1.name;
				}
				fighter2.health -= fighter1.damagePerAttack;
				round++;
			}
		}
	}
}
