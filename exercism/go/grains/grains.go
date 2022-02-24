package grains

import "errors"

func Square(n int) (uint64, error) {
	if n < 1 || n > 64 {
		return 0, errors.New("n < 0 || n > 64")
	}
	var sum uint64 = 1
	for i := 1; i < n; i++ {
		sum *= 2
	}
	return sum, nil
}

func Total() uint64 {
	var sum uint64
	for i := 1; i <= 64; i++ {
		n, e := Square(i)
		if e != nil {
			return 0
		}
		sum += n
	}
	return sum
}
