package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
)

var emailRegex = regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
var alphanumericRegex = regexp.MustCompile("^[a-zA-Z0-9]+$")

func isValidUser(id, username, email, age, location string) bool {
	if !alphanumericRegex.MatchString(id) || !alphanumericRegex.MatchString(username) {
		return false
	}

	if !emailRegex.MatchString(email) {
		return false
	}

	if age != "" {
		if _, err := strconv.Atoi(age); err != nil {
			return false
		}
	}

	return true
}

func main() {
	dir, err := os.Getwd()
	if err != nil {
		log.Panicln(err)
	}

	filePath := filepath.Join(
		dir, "2023", "challenge-05", "database_attacked.txt",
	)

	data, err := os.ReadFile(filePath)
	if err != nil {
		log.Panicln(err)
	}

	lines := strings.Split(string(data), "\n")

	var hiddenMessage strings.Builder
	for _, line := range lines {
		fields := strings.Split(line, ",")

		if isValidUser(fields[0], fields[1], fields[2], fields[3], fields[4]) {
			continue
		}

		hiddenMessage.WriteByte(fields[1][0])
	}

	fmt.Println(hiddenMessage.String())
}
