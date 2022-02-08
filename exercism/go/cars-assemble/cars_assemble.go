package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * successRate / 100
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int(CalculateWorkingCarsPerHour(productionRate, successRate) / 60)
}

// CalculateCost works out the cost of producing the given number of cars
func CalculateCost(carsCount int) uint {
	if carsCount >= 10 {
		groupsOfTen := int(carsCount / 10)
		individual := carsCount - (groupsOfTen * 10)
		return (uint(groupsOfTen) * 95000) + (uint(individual) * 10000)
	} else {
		return uint(carsCount) * 10000
	}

}
