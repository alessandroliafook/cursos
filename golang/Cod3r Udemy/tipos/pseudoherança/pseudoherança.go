package main

import "fmt"

type carro struct {
	nome            string
	velocidadeAtual uint
}

type ferrari struct {
	carro       // campo anonimo (composição)
	turboLigado bool
}

func main() {

	f := ferrari{}
	f.nome = "F40"
	f.velocidadeAtual = 0
	f.turboLigado = true

	fmt.Printf("A ferrari %s está com o turbo ligado? %v\n", f.nome, f.turboLigado)
	fmt.Println(f)

}
