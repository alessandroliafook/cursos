package main

import "fmt"

func main() {
	x := 1
	y := 2

	// apenas posfix
	x++ // x += 1 ou x = x + 1
	fmt.Println(x)

	y-- // y -= 1 ou y = y - 1
	fmt.Println(y)

	/*
		não existe esse tratamento de precedência, essas operações devem ser realizadas de forma distinta
		fmt.Println(x == y--)
	*/
}
