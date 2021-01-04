package main

import "fmt"

func inc1(n int) {
	n++
}

// revisão: um ponteiro é representado por um *
func inc2(n *int) {
	/*
		revisão: * é utilizado para desreferenciar, ou seja,
		ter acesso ao valor ao qual o ponteiro aponta
	*/

	*n++
}

func main() {

	n := 1

	inc1(n) // por valor a função opera na cópia
	fmt.Println(n)

	// revisão: & usado para obter o endereço de memória da variável
	inc2(&n) // por referência, pode causar efeito colateral
	fmt.Println(n)
}
