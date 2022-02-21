// Package twofer implements two for one utilities.
package twofer

// ShareWith returns who you would be sharing with based on given name.
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return "One for " + name + ", one for me."
}
