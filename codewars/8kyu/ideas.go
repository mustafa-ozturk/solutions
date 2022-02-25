// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/go
package kata

func Well(x []string) string {
	good := 0
	for _, v := range x {
		if v == "good" {
			good++
		}
	}
	if good > 0 && good <= 2 {
		return "Publish!"
	}
	if good > 2 {
		return "I smell a series!"
	}
	return "Fail!"
}
