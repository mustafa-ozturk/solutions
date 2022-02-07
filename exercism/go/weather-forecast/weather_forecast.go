// Package weather doesn't seem to do shit.
package weather

// CurrentCondition stores the current condition i guess ...
var CurrentCondition string

// CurrentLocation stores the current condition i guess ...
var CurrentLocation string

// Forecast doesn't actually do shit.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
