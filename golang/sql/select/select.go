package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type usuario struct {
	id   int
	nome string
}

func tratarErro(err error) {
	if err != nil {
		log.Fatal(err) // Realiza o log do erro
	}
}

func main() {

	// abertura da conexão
	db, err := sql.Open("mysql", "root:root@/cursogo")

	// tratamento de erro na abertura
	tratarErro(err)

	defer db.Close() // encerrar a conexão ao final da função atual

	rows, erro := db.Query("select * from usuarios where id > ?", 0)

	tratarErro(erro)

	for rows.Next() {

		var u usuario

		rows.Scan(&u.id, &u.nome)
		fmt.Println(u)
	}
}
