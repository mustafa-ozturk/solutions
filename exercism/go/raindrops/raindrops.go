package raindrops

import "strconv"

func Convert(n int) string {
	str := ""
	if n%3 == 0 {
		str += "Pling"
	}
	if n%5 == 0 {
		str += "Plang"
	}
	if n%7 == 0 {
		str += "Plong"
	}
	if n%3 != 0 && n%5 != 0 && n%7 != 0 {
		str += strconv.Itoa(n)
	}
	return str
}
