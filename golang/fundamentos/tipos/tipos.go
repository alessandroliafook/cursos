package main

import (
	"fmt"
	"math"
	"reflect"
)

func main() {

	// numeros inteiros
	fmt.Println(1, 2, 1000)
	fmt.Println("Literal inteiro é", reflect.TypeOf(32000))

	// sem sinal (só positivos)... uint8 uint16 uint32 uint64
	var b byte = 255 //byte é um nome alternativo para uint8
	fmt.Println("O byte é", reflect.TypeOf(b))

	// com sinal... int8 int16 int32 int64
	i1 := math.MaxInt64

	fmt.Println("O valor máximo do int é", i1)
	fmt.Println("O tipo de i1 é", reflect.TypeOf(i1))

	var i2 rune = 'a' // representa um mapeamento da tabela Unicode (int32)
	fmt.Println("O rune é", reflect.TypeOf(i2))
	fmt.Println(i2)

	// numeros reais (float32, float64)
	var x float32 = 49.99
	var a = float32(49.99) // possível fazer cast de tipo
	fmt.Println("O tipo de x é", reflect.TypeOf(x))
	fmt.Println("O tipo do literal 49.99 é", reflect.TypeOf(49.99)) // float64
	fmt.Println("O tipo de a é", reflect.TypeOf(a))

	// boolean
	bo := true
	fmt.Println("O tipo de bo é", reflect.TypeOf(bo))
	fmt.Println(!bo) // negação do valor

	// string

	s1 := "Olá meu nome é Leo"
	fmt.Println(s1 + "!")
	fmt.Println("O tamanho da string é", len(s1))

	// todos os caracteres são adicionados, incluindo quebra de linha e espaçamento
	s2 := `Olá
	meu
	nome
	é
	Leo`
	fmt.Println(s2 + "!")
	fmt.Println("O tamanho da string é", len(s2))

	// char??
	// representa o unicode da letra, e só pode conter apenas um caractere dentro das aspas simples
	char := 'a'
	fmt.Println("O tipo de char é", reflect.TypeOf(char))
	fmt.Println(char)
}
