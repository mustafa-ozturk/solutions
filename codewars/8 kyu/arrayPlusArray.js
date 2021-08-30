// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1, arr2) {
	return (
		arr1.reduce((acc, cval) => acc + cval, 0) +
		arr2.reduce((acc, cval) => acc + cval, 0)
	);
}
