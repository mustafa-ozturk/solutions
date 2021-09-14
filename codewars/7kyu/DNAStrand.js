// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function DNAStrand(dna) {
	let newDna = "";
	dna.split("").forEach((char) => {
		if (char === "A") {
			newDna += "T";
		}
		if (char === "T") {
			newDna += "A";
		}
		if (char === "C") {
			newDna += "G";
		}
		if (char === "G") {
			newDna += "C";
		}
	});
	return newDna;
}
