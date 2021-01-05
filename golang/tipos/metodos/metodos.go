package main

import (
	"fmt"
	"strings"
)

type pessoa struct {
	nome      string
	sobrenome string
}

func (p pessoa) getNomeCompleto() string {
	return p.nome + " " + p.sobrenome
}

func (p *pessoa) setNomeCompleto(nomeCompleto string) {
	partes := strings.Split(nomeCompleto, " ")
	p.nome = partes[0]
	p.sobrenome = partes[1]
}

func main() {

	p1 := pessoa{"Pedro", "Silva"}
	fmt.Println(p1.getNomeCompleto())

	/*
		por se tratar de struct não é necessário fazer a chamada por referência
		o compilador já compreende que deve modificar o objeto e não sua cópia
		conforme definido na assinatura da função
	*/
	p1.setNomeCompleto("Maria Pereira")
	fmt.Println(p1.getNomeCompleto())

}
