package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

const tipoBd = "mysql"
const acessoBd = "root:root@/cursogo"

// Usuario :)
type Usuario struct {
	ID   int    `json:"id"`
	Nome string `json:"nome"`
}

// UsuarioHandler analisa o request e delega para a função adequada
func UsuarioHandler(w http.ResponseWriter, r *http.Request) {

	sid := strings.TrimPrefix(r.URL.Path, "/usuarios/")
	id, _ := strconv.Atoi(sid)

	switch {
	case r.Method == "GET" && id > 0:
		usuarioPorID(w, r, id)
	case r.Method == "GET":
		usuarioTodos(w, r)
	default:
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "Desculpa... :(")
	}
}

func usuarioPorID(w http.ResponseWriter, r *http.Request, id int) {

	db, err := sql.Open(tipoBd, acessoBd)

	tratarErro(err)
	defer db.Close()

	var u Usuario

	// retorna apenas uma linha na consulta e converte o tipo
	db.QueryRow("select id, nome from usuarios where id = ?", id).Scan(&u.ID, &u.Nome)

	json, _ := json.Marshal(u)

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, string(json))
}

func usuarioTodos(w http.ResponseWriter, r *http.Request) {

	db, err := sql.Open(tipoBd, acessoBd)
	tratarErro(err)
	defer db.Close()

	rows, _ := db.Query("select id, nome from usuarios")
	defer rows.Close()

	var usuarios []Usuario

	for rows.Next() {

		var usuario Usuario
		rows.Scan(&usuario.ID, &usuario.Nome)

		usuarios = append(usuarios, usuario)
	}

	json, _ := json.Marshal(usuarios)

	construirResposta(w, string(json))
}

func tratarErro(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func construirResposta(w http.ResponseWriter, resp string) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, resp)
}
