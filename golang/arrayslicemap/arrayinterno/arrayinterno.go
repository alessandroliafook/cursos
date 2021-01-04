package main

import "fmt"

func main() {

	array := [4]int{1, 2, 3, 4}
	sl1 := array[:3]
	sl2 := array[2:]

	fmt.Println(array, sl1, sl2)

	array[2] = 5
	fmt.Println(array, sl1, sl2)

	s1 := make([]int, 10, 20)
	s2 := append(s1, 1, 2, 3) // criado por referência, aponta para o mesmo array interno
	s3 := make([]int, 10, 20) // criado de forma independente, aponta para um array interno diferente
	fmt.Println(s1, s2, s3)

	s1[0] = 7
	fmt.Println(s1, s2, s3)

	fmt.Println(s1, len(s1), cap(s1))
	fmt.Println(s2, len(s2), cap(s2))

	s4 := make([]int, 10, 10)
	/*
		criado por referência, mas foi necessário aumentar a capacidade
		o que modificou o array interno de referência
	*/
	s5 := append(s4, 1, 2, 3)

	fmt.Println(s4, len(s4), cap(s4))
	fmt.Println(s5, len(s5), cap(s5))

	s4[0] = 7
	fmt.Println(s4, s5)

}
