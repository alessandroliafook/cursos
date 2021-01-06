package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	// abertura da conexão
	db, err := sql.Open("mysql", "root:root@/cursogo")

	// tratamento de erro na abertura
	if err != nil {
		log.Fatal(err) // Realiza o log do erro
	}

	defer db.Close() // encerrar a conexão ao final da função atual

	tx, _ := db.Begin()
	stmt, _ := tx.Prepare("insert into usuarios(id, nome) values(?,?)")

	stmt.Exec(2000, "Bia")
	stmt.Exec(2001, "Carlos")
	_, err = stmt.Exec(1, "Tiago") // chave duplicada

	if err != nil { // tratamento de erro
		tx.Rollback() // é necessário fazer expressamente
		log.Fatal(err)
	}

	tx.Commit() // realiza o commit de todas as operações que não foram objeto de rollback
}
