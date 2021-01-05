package main

import (
	"fmt"
	"time"
)

// Chanel (canal) - é a forma de comunicação/sincronização entre goroutines
// chanel é um tipo primitivo

func doisTresQuatroVezes(base int, c chan int) {
	time.Sleep(time.Second)
	c <- base * 2

	time.Sleep(time.Second)
	c <- base * 3

	time.Sleep(time.Second)
	c <- base * 4
}

func main() {

	c := make(chan int)

	go doisTresQuatroVezes(2, c)

	a, b := <-c, <-c // recebendo dados do canal

	fmt.Println(a, b)

	fmt.Println(<-c)

}
