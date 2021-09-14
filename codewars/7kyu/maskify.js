// https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
	return cc
		.split("")
		.map((elem, index) => {
			if (index < cc.length - 4) {
				return (elem = "#");
			} else {
				return elem;
			}
		})
		.join("");
}
