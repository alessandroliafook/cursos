package main

import "fmt"

func compras(trab1, trab2 bool) (bool, bool, bool) {
	comprarTv50 := trab1 && trab2
	comprarTv32 := trab1 != trab2 // ou exclusivo
	comprarSorvete := trab1 || trab2

	return comprarTv50, comprarTv32, comprarSorvete
}

func imprimirCompras(tv50, tv32, sorvete bool) {
	fmt.Printf("Tv50: %t, Tv32: %t, Sorvete: %t, Saudável: %t\n", tv50, tv32, sorvete, !sorvete)
}

func main() {
	tv50, tv32, sorvete := compras(true, true)
	imprimirCompras(tv50, tv32, sorvete)

	imprimirCompras(compras(false, true)) // a avaliação de função é lazy
}
