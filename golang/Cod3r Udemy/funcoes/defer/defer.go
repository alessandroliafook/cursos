package main

import "fmt"

func obterValorAprovado(numero int) int {
	/*
		palavra reservada refer
		garante a execução do comando no momento mais tardio possível
		considerando o escopo em que ela se encontra
	*/
	defer fmt.Println("fim!")

	if numero > 5000 {
		fmt.Println("Número alto...")
		return 5000
	}

	fmt.Println("Valor baixo...")
	return numero
}

func main() {
	fmt.Println(obterValorAprovado(6000))
	fmt.Println(obterValorAprovado(3000))
}
