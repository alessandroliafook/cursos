package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	// abertura da conexão
	db, err := sql.Open("mysql", "root:root@/cursogo")

	// tratamento de erro na abertura
	if err != nil {
		panic(err) // interrupção da execução do programa
	}

	defer db.Close() // encerrar a conexão ao final da função atual

	// preparando statment para execução
	stmt, _ := db.Prepare("insert into usuarios(nome) values(?)")
	// Execução do statment para o parâmetro passado no argumento
	stmt.Exec("Maria")
	stmt.Exec("Joao")

	res, _ := stmt.Exec("Pedro")

	id, _ := res.LastInsertId()
	linhas, _ := res.RowsAffected()

	fmt.Println(id, linhas)
}
