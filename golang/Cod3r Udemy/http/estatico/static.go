package main

import (
	"log"
	"net/http"
)

func main() {

	// referencia o diretório considerando o pacote
	fs := http.FileServer(http.Dir("publico"))
	http.Handle("/", fs)

	log.Println("Executando...")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
