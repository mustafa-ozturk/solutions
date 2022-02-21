// Package hamming implements an utility to calculate the hamming distance.
package hamming

import "errors"

// Distance compares 2 strings and returns the diff count (hamming distance).
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("cannot compare 2 different length strands")
	}
	diff := 0
	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			diff++
		}
	}
	return diff, nil
}
