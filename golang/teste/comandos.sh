go test # executa os testes do diretório atual
go test ./... # executa todos os testes dos subdiretórios
go test -v # a flag exibe todos os logs que foram codificados

go test -cover # indica a porcentagem de cobertura dos testes
go test -coverprofile=resultado.out # escreve o resultado da cobertura em um arquivo de saída
go tool cover -func=resultado.out # exibe no terminal o resultado do arquivo de cobertura
go tool cover -html=resultado.out # gera um arquivo html a partir do arquivo de cobertura