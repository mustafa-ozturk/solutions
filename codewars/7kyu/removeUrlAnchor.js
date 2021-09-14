// https://www.codewars.com/kata/51f2b4448cadf20ed0000386
function removeUrlAnchor(url) {
	const index = url.split("").findIndex((elem) => elem === "#");
	if (index < 0) {
		return url;
	}
	return url.substring(0, index);
}
