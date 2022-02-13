package booking

import (
	"strconv"
	"time"
)

// Schedule returns a time.Time from a string containing a date
func Schedule(date string) time.Time {
	time, _ := time.Parse("1/02/2006 15:04:05", date)
	return time
}

// Mon Jan 2 15:04:05 -0700 MST 2006
// HasPassed returns whether a date has passed
func HasPassed(date string) bool {
	datetime, _ := time.Parse("January 2, 2006 15:04:05", date)
	return datetime.Before(time.Now())
}

// IsAfternoonAppointment returns whether a time is in the afternoon
func IsAfternoonAppointment(date string) bool {
	datetime, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
	return datetime.Hour() >= 12 && datetime.Hour() < 18
}

// Description returns a formatted string of the appointment time
func Description(date string) string {
	datetime, _ := time.Parse("1/2/2006 15:04:05", date)
	weekday := datetime.Weekday().String()
	month := datetime.Month().String()
	day := strconv.Itoa(datetime.Day())
	hour := strconv.Itoa(datetime.Hour())
	mins := strconv.Itoa(datetime.Minute())
	year := strconv.Itoa(datetime.Year())
	return "You have an appointment on " + weekday +
		", " + month + " " + string(day) + ", " +
		year + ", at " + hour + ":" + mins + "."
}

// AnniversaryDate returns a Time with this year's anniversary
func AnniversaryDate() time.Time {
	return time.Date(time.Now().Year(), time.September, 15, 0, 0, 0, 0, time.UTC)
}
