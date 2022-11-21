package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	var fileBytes []byte
	var err error

	if fileBytes, err = os.ReadFile("encrypted.txt"); err != nil {
		log.Println(err)
	}

	parse := strings.ReplaceAll(string(fileBytes), " ", "32")
	bytes := []byte{}

	i := 0
	j := 3

	for i < len(parse) {
		var next int = 3
		var n int

		if n, err = strconv.Atoi(parse[i:j]); err != nil {
			log.Panicln(err)
		}

		if n > 200 {
			next--
		}

		if n, err = strconv.Atoi(parse[i : i+next]); err != nil {
			log.Panicln(err)
		}

		bytes = append(bytes, byte(n))

		j += next
		i += next
	}

	fmt.Println(string(bytes))
}
