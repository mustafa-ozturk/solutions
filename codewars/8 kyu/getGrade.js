// https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade(s1, s2, s3) {
	const score = (s1 + s2 + s3) / 3;
	if (score < 60) return "F";

	if (score < 70) return "D";

	if (score < 80) return "C";

	if (score < 90) return "B";

	if (score <= 100) return "A";
}
