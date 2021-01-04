package main

import "fmt"

func main() {
	numeros := [...]int{1, 2, 3, 4, 5} // compilador conta!

	for i, numero := range numeros {
		fmt.Printf("%d) %d\n", i+1, numero)
	}

	/*
		utilizar o _ para poder não utilizar o valor
	*/
	fmt.Println("Valores")
	for _, num := range numeros { // percorrendo apenas valores
		fmt.Printf("%d ", num)
	}

	fmt.Println("\nIndices")
	for i := range numeros { // percorrendo apenas índices
		fmt.Printf("%d ", i)
	}
}
