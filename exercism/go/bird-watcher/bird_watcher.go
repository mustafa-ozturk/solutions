package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
	birds := 0
	for i := 0; i < len(birdsPerDay); i++ {
		birds += birdsPerDay[i]
	}
	return birds
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
	birds := 0
	startDay := 0
	if week == 1 {
		startDay = 0
	} else {
		startDay = (week - 1) * 7
	}
	for i := startDay; i < week*7; i++ {
		birds += birdsPerDay[i]
	}
	return birds
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i := 0; i < len(birdsPerDay); i += 2 {
		birdsPerDay[i]++
	}
	return birdsPerDay
}
