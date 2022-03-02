package kata

func Solve(s string) int {
	println(s)
	chain := 0
	count := 0
	for i := 0; i < len(s); i++ {
		l := string(s[i])
		if count > 0 {
			if l == "a" || l == "e" || l == "i" || l == "o" || l == "u" {
				count++
			} else {
				if count > chain {
					chain = count
				}
				count = 0
			}
		} else {
			if l == "a" || l == "e" || l == "i" || l == "o" || l == "u" {
				count = 1
			}
		}
	}
	return chain
}
