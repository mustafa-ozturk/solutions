// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
	return wait - (cap - on) < 0 ? 0 : wait - (cap - on);
}
