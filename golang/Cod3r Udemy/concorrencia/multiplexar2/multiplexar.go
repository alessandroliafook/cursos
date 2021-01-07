package main

import (
	"fmt"
	"time"
)

func falar(pessoa string) <-chan string {

	c := make(chan string)

	go func() {
		for i := 0; i < 3; i++ {
			time.Sleep(time.Second)
			c <- fmt.Sprintf("%s falando: %d", pessoa, i)
		}
		/*
			Fechar o canal após realizar todo o seu processamento
			não impede o consumo da informação adicionada
		*/
		close(c)
	}()
	return c
}

func juntar(entrada1, entrada2 <-chan string) <-chan string {
	c := make(chan string)
	go func() {
		ok1, ok2 := true, true // variáveis de controle do status dos canais
		var s string
		for {
			select {
			case s, ok1 = <-entrada1:
				c <- s
			case s, ok2 = <-entrada2:
				c <- s
			}
			// teste adicionado para fechar o canal e evitar o deadlock
			if ok1 == false && ok2 == false {
				close(c)
				break
			}
		}
	}()
	return c
}

func main() {

	c := juntar(falar("João"), falar("Maria"))
	for {
		x, ok := <-c
		// teste para verificar o canal e evitar deadlock
		if !ok {
			break
		}
		// teste para excluir entradas vazias
		if x != "" {
			fmt.Printf("%s ", x)
		}
	}
}
