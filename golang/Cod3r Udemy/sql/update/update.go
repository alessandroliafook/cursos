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

	// update
	stmt, _ := db.Prepare("update usuarios set nome = ? where id = ?")

	stmt.Exec("Uóxiton Istive", 1)
	stmt.Exec("Sheristone Ualeska", 2)

	// delete
	stmt, _ = db.Prepare("delete from usuarios where id = ?")

	stmt.Exec(3)

}
