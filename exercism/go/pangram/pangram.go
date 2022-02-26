package pangram

import (
	"strings"
)

func IsPangram(input string) bool {
	if input == "" {
		return false
	}
	input = strings.ToLower(input)
	alpha := [26]string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

	for i := 0; i < len(alpha); i++ {
		if !strings.Contains(input, alpha[i]) {
			return false
		}
	}
	return true
}
