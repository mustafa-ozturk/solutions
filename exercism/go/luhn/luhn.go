package luhn

import (
	"fmt"
	"strconv"
	"strings"
)

func Valid(id string) bool {
	id = strings.ReplaceAll(id, " ", "")
	if len(id) <= 1 {
		return false
	}
	reversed := ""
	for i := len(id) - 1; i >= 0; i-- {
		reversed += string(id[i])
	}
	sum := 0
	for i := 0; i < len(reversed); i++ {
		n, e := strconv.Atoi(string(reversed[i]))
		if e != nil {
			return false
		}
		if i%2 == 0 {
			sum += n
		} else {
			fmt.Println(n)
			if n*2 > 9 {
				sum += n*2 - 9
			} else {
				sum += n * 2
			}
		}
	}
	return sum%10 == 0
}
