#include <iostream>
#include <string.h>

using namespace std;

// utiliza-se o typedef para definir um tipo
// no caso o tipo é o t_pessoa
// caso não seja utilizado o typedef é necessário
// declarar a variável como struct pessoa p
typedef struct pessoa
{
    // possível adicionar inúmeros campos a struct
    char nome[100];
    int idade;
}t_pessoa;

void printPessoa(t_pessoa p);

int main (int argc, char *argv[]) {
    // assim é possível criar uma variável do tipo t_pessoa
    t_pessoa p;

    strcpy(p.nome, "marcos");
    p.idade = 26;
    printPessoa(p);

    // também é possível criar um array do novo tipo
    t_pessoa pessoas[10];

    strcpy(pessoas[0].nome, "marcos");
    pessoas[0].idade = 26;
    printPessoa(pessoas[0]);

    strcpy(pessoas[1].nome, "Joao");
    pessoas[1].idade = 30;
    printPessoa(pessoas[1]);

    // também é possível trabalhar com ponteiro para o novo tipo

    t_pessoa *p2;
    p2->idade = 32;
    cout << "Idade p2: " << p2->idade << endl;    

    //assim como é possível trabalhar com array de ponteiros
    t_pessoa ppessoas[100];
    t_pessoa* p3;

    p3 = &ppessoas[0];

    ppessoas[0].idade = 10;
    ppessoas[1].idade = 11;
    ppessoas[2].idade = 12;

    cout << p3->idade << endl;
    cout << (p3 + 1)->idade << endl;
    cout << (p3 + 2)->idade << endl;

    return 0;
}

void printPessoa(t_pessoa p)
{
    cout << "Nome: " << p.nome << endl;    
    cout << "Idade: " << p.idade << endl;    
}