package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func AsciiStringToString(s string) (str string, err error) {
	parse := strings.ReplaceAll(s, " ", "32")
	bytes := []byte{}

	for i := 0; i < len(parse); i += 3 {
		var num int

		if num, err = strconv.Atoi(parse[i:(i + 3)]); err != nil {

			return
		}

		if num > 200 {
			num, _ = strconv.Atoi(parse[i:(i + 2)])
			i--
		}

		bytes = append(bytes, byte(num))
	}

	return string(bytes), nil
}

func main() {
	var fileBytes []byte
	var err error

	if fileBytes, err = os.ReadFile("encrypted.txt"); err != nil {
		log.Panicln(err)

	}

	if str, err := AsciiStringToString(string(fileBytes)); err == nil {
		fmt.Println(str)

		return
	}

	log.Panicln(err)
}
