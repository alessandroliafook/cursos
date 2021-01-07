package main

import "fmt"

func main() {

	funcsESalario := map[string]float64{
		"José João":      11325.45,
		"Gabriela Silva": 15456.78,
		"Pedro Júnior":   1200.0, // o último elemento deve ter a vírgula ou a chave de fechamento deve estar no lugar da vírgula
	}

	fmt.Println(funcsESalario)

	funcsESalario["Rafael Filho"] = 1350.0
	fmt.Println(funcsESalario)

	delete(funcsESalario, "Inexistente")

	for nome, salario := range funcsESalario { // primeiro valor será sempre a chave
		fmt.Println(nome, salario)
	}
}
