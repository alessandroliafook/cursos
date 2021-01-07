package main

import (
	"encoding/json"
	"fmt"
)

type produto struct {
	/*
	   Iniciar um atributo da struct com letra maiúscula indica que é público
	   Iniciar com letra minúscula indica que é privado
	*/
	ID    int      `json:"id"` // se adicionar espaço na string do json dá erro
	Nome  string   `json:"nome"`
	Preco float64  `json:"preco"`
	Tags  []string `json:"tags"`
}

func main() {

	// struct para json
	p1 := produto{1, "Notebook", 1899.90, []string{"Promoção", "Eletrônico"}}
	p1Json, _ := json.Marshal(p1)
	fmt.Println(string(p1Json))

	var p2 produto
	// a ordem dos atributos não é relevante
	jsonString := `{"id":2, "nome": "Caneta", "preco": 8.99, "tags": ["Papelaria", "Importado"]}`
	json.Unmarshal([]byte(jsonString), &p2)
	fmt.Println(p2.Tags[1])
}
