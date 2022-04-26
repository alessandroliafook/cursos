#include <iostream>

using namespace std;

int compareAndPrint(int *p1, int *p2);

int main (int argc, char *argv[])
{
    int var = 10;
    // definindo ponteiros para armazenar o 
    //endereço de memória de uma variável inteira
    int *p1, *p2; 

    // atribuindo o ponteiro da variável var
    // as variáveis de ponteiro
    p1 = &var;
    p2 = &var;

    // imprimindo o valor que indica a posição de memória
    // armazenada nos ponteiros
    cout << p1 << endl;
    cout << p2 << endl;
    cout << &var << endl;

    //é possível realizar comparações entre ponteiros
    if (p1 == p2) cout << "p1 contem o mesmo endereço de p2" << endl;

    // é possível modificar o valor contido na posição de memória
    // caso a alteração seja realizada em uma das variáveis
    // todas as demais que apontam para a mesmo posição de memória
    // serão afetadas
    *p2 = 20;
    *p1 = 15;

    cout << var << endl;

    // é possível trabalhar com ponteiros direcionados a valores
    // relacionados a posição de memória de elementos de um array
    int vet[] = {1, 2, 3};
    int *v1 = &vet[0], *v2= &vet[1];

    cout << v1 << endl;
    cout << v2 << endl;

    // o valor da posição de memória segue ordem incremental
    // podendo ser objeto de operação
    compareAndPrint(v1, v2);
    v1 += 2;
    compareAndPrint(v1, v2);

    return 0;
}

int compareAndPrint(int *p1, int *p2) {

    if (p1 < p2) cout << "p1 vem antes" << endl;
    else cout << "p1 vem depois" << endl;

    return 0;
}