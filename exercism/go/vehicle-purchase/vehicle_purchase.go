package purchase

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	return kind == "car" || kind == "truck"
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in dictionary order.
func ChooseVehicle(option1, option2 string) string {
	msg := " is clearly the better choice."
	if option1 < option2 {
		return option1 + msg
	}
	return option2 + msg
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	percent := 1.0
	if age < 3 {
		percent = 0.8
	}
	if age >= 3 && age < 10 {
		percent = 0.7
	}
	if age >= 10 {
		percent = 0.5
	}
	return originalPrice * percent
}
