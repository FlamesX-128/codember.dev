package main

import (
	"strconv"
	"strings"
)

func main() {
	var numbers []int

	for i := 11098; i < 98123; i++ {
		data := strings.Split(strconv.Itoa(i), "")

		ni := true
		n5 := 0

		for j := 0; j < len(data); j++ {
			var n0 int = -1

			n1, _ := strconv.Atoi(data[j])

			if j > 0 {
				n0, _ = strconv.Atoi(data[j-1])
			}

			if n0 != -1 && n0 > n1 {
				ni = false

				break
			}

			if n1 == 5 {
				n5++

			}

		}

		if ni && n5 >= 2 {
			numbers = append(numbers, i)

		}

	}

	println(len(numbers), numbers[55])
}
