#include <iostream>
#include <string.h>

using namespace std;

int main(int argc, char const *argv[])
{
    int array [] = {1,2,3,4,5};
    int* parray = &array[0];
    int i = 0;

    while (i < 5) {
        cout << *parray << endl;
        parray++;
        i++;
    }
    
    // por causa dos incrementos o ponteiro aponta para o elemento além da lista
    // e como é possível fazer operações matemáticas para reposicionar o ponteiro
    parray -= 5;

    // é possível criar ponteiro para ponteiro, e essa referência pode seguir
    // de forma infinita, aumentando o número de * para indicar o nível de 
    // profundidade desejada.
    int** pparray = &parray;
    cout << **pparray << endl;

    // TRABALHANDO COM STRINGS
    char nome[100];
    cout << "Digite um nome: ";
    cin >> nome;

    int tam = strlen(nome);
    char *p = &nome[tam];
    char *pini = &nome[0];

    while(p >= pini) {
        cout << *p;
        p--;
    }

    cout << endl;

    return 0;
}
