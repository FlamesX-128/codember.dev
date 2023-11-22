package main

import (
	"fmt"
	"log"
	"os"
	"path"
)

func main() {
	var value = 0

	dir, err := os.Getwd()

	if err != nil {
		log.Panicln(err)
	}

	dat, err := os.ReadFile(
		path.Join(dir, "message_02.txt"),
	)

	if err != nil {
		log.Panicln(err)
	}

	for _, char := range dat {
		switch char {
		case '#':
			value++
		case '@':
			value--
		case '*':
			value = value * value
		case '&':
			fmt.Print(value)
		}
	}

	fmt.Println()
}