package main

import "fmt"

func main() {

	array1 := [3]int{1, 2, 3}
	var slice1 []int

	// array = append(array1, 4, 5, 6) // código incorreto pois a função append retorna um slice
	slice1 = append(slice1, 4, 5, 6)

	fmt.Println(array1, slice1)

	slice2 := make([]int, 2)
	copy(slice2, slice1)
	fmt.Println(slice1, slice2)
}