package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	gocount := 0
	jscount := 0
	tscount := 0

	err := filepath.Walk(".", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !strings.Contains(info.Name(), "test") && !strings.Contains(info.Name(), "json") {
			switch {
			case strings.Contains(info.Name(), ".go"):
				gocount++
				break
			case strings.Contains(info.Name(), ".js"):
				jscount++
				break
			case strings.Contains(info.Name(), ".ts"):
				tscount++
				break
			}
		}
		return nil
	})
	if err != nil {
		log.Println(err)
	}

	f, err := os.Create("README.md")
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	msg := "This readme was built with my terrible WIP Go script [build-readme.go](build-readme.go).\n\n"
	total := fmt.Sprintf("Total problems solved: **%d**\n\n", jscount+gocount+tscount)
	table := fmt.Sprintf(
		"| Language | Problems solved |\n| --- | --: |\n| Javascript | %d |\n| Go | %d |\n| Typescript | %d |\n",
		jscount, gocount, tscount)

	_, writeErr := f.WriteString(msg + total + table)

	if writeErr != nil {
		log.Fatal(writeErr)
	}

	fmt.Println("readme built")
}
