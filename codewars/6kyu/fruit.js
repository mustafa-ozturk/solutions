// https://www.codewars.com/kata/590adadea658017d90000039
function fruit(reels, spins) {
	let scoring = {
		Wild: 10,
		Star: 9,
		Bell: 8,
		Shell: 7,
		Seven: 6,
		Cherry: 5,
		Bar: 4,
		King: 3,
		Queen: 2,
		Jack: 1,
	};

	let first = reels[0][spins[0]];
	let second = reels[1][spins[1]];
	let third = reels[2][spins[2]];

	// 3 combo
	if (first === second && second === third) {
		return scoring[first] * 10;
	}

	// 2 combo
	if (first === second && first !== third && third !== "Wild") {
		return scoring[first];
	}
	if (first === third && first !== second && second !== "Wild") {
		return scoring[first];
	}
	if (second === third && second !== first && first !== "Wild") {
		return scoring[second];
	}

	// 2 combo + wild
	if (first === second && third === "Wild") {
		return scoring[first] * 2;
	}
	if (first === third && second === "Wild") {
		return scoring[first] * 2;
	}
	if (second === third && first === "Wild") {
		return scoring[second] * 2;
	}

	// 0 combo
	return 0;
}
