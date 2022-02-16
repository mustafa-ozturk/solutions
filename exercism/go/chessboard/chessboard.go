package chessboard

// Declare a type named Rank which stores if a square is occupied by a piece - this will be a slice of bools
type Rank []bool

// Declare a type named Chessboard which contains a map of eight Ranks, accessed with keys from "A" to "H"
type Chessboard map[string]Rank

// CountInRank returns how many squares are occupied in the chessboard,
// within the given rank
func CountInRank(cb Chessboard, rank string) int {
	occupied := 0
	for _, val := range cb[rank] {
		if val {
			occupied++
		}
	}
	return occupied
}

// CountInFile returns how many squares are occupied in the chessboard,
// within the given file
func CountInFile(cb Chessboard, file int) int {
	if file < 0 || file > 8 {
		return 0
	}
	occupied := 0
	for _, val := range cb {
		if val[file-1] {
			occupied++
		}
	}
	return occupied
}

// CountAll should count how many squares are present in the chessboard
func CountAll(cb Chessboard) int {
	squares := 0
	for _, val := range cb {
		squares += len(val)
	}
	return squares
}

// CountOccupied returns how many squares are occupied in the chessboard
func CountOccupied(cb Chessboard) int {
	occupied := 0
	for _, rank := range cb {
		for _, val := range rank {
			if val {
				occupied++
			}
		}
	}
	return occupied
}
