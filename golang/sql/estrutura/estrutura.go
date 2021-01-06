package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func tratamentoErro(err error) {
	if err != nil {
		panic(err)
	}
}

func exec(db *sql.DB, sql string) sql.Result {

	result, err := db.Exec(sql)

	tratamentoErro(err)
	return result
}

func main() {

	/*
		Realiza a abertura da conexão com o banco de dados
		o primeiro parâmetro indica qual a linguagem do banco
		e utiliza o pacote importado de forma indireta
		o segundo parametro indica o usuário, a senha e o banco de dados da conexão
	*/
	db, err := sql.Open("mysql", "root:root@/")
	tratamentoErro(err)

	defer db.Close()

	exec(db, "create database if not exists cursogo")
	exec(db, "use cursogo")
	exec(db, "drop database if exists usuarios")
	exec(db, `create table usuarios (
		id integer auto_increment,
		nome varchar(80),
		PRIMARY KEY (id)
	)`)
}
