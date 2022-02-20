package thefarm

import (
	"errors"
	"fmt"
)

type WeightFodder interface {
	FodderAmount() (float64, error)
}

var ErrScaleMalfunction = errors.New("sensor error")

// TODO: Define the SillyNephewError type here.
type SillyNephewError struct {
	cows int
}

func (e *SillyNephewError) Error() string {
	return fmt.Sprintf("silly nephew, there cannot be %d cows", e.cows)
}

// DivideFood computes the fodder amount per cow for the given cows.
func DivideFood(weightFodder WeightFodder, cows int) (float64, error) {
	fodder, err := weightFodder.FodderAmount()

	if err == ErrScaleMalfunction {
		fodder *= 2
	} else if err != nil {
		return 0.0, err
	}

	if fodder < 0 {
		return 0.0, errors.New("negative fodder")
	}

	if cows < 0 {
		return 0.0, &SillyNephewError{cows}
	} else if cows == 0 {
		return 0.0, errors.New("division by zero")
	}

	if err == ErrScaleMalfunction && fodder < 0 {
		return 0.0, errors.New("negative fodder")
	}

	return fodder / float64(cows), nil
}
