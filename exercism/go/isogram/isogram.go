package isogram

import "strings"

func IsIsogram(word string) bool {
	m := make(map[string]int)

	for _, char := range word {
		c := strings.ToUpper(string(char))
		_, ok := m[c]
		if !ok || (c == "-" || c == " ") {
			m[c] = 1
		} else {
			return false
		}
	}
	return true
}
