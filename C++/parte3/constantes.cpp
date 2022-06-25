#include <iostream>

using namespace std;

int main (int argc, char *argv[]) {

    // constante não aceita alteração posterior
    const double PI = 3.141516;
    cout << PI << endl;

    // é possível declarar const para ponteiros
    const int vet[] = {1, 2, 3};

    const int* p1;
    // ponteiro para array de constante int
    int const* p2;

    p1 = &vet[0];
    p2 = &vet[1];

    // não é possível realizar alteração do valor armazenado
    // *p1 = 10;
    // *p2 = 10;

    cout << "*p1 = " << *p1 << endl;
    cout << "*p2 = " << *p2 << endl;

    // no caso aponta para um array de ponteiros 
    int* const p3 = new int[3];

    *p3 = 4;
    *(p3 + 1) = 5;
    *(p3 + 2) = 6;

    cout << "P3:" << endl;
    cout << *p3 << endl;
    cout << *(p3 + 1) << endl;
    cout << *(p3 + 2) << endl;

    // não é possível incrementar o valor do ponteiro a variável diretamente
    // p3++;
    // porém é possível modificar o conteúdo
    *p3 = 10;
    cout << "valor modificado de p3: " << *p3 << endl;

    // neste caso não é possível alterar nem o valor do ponteiro
    // nem os caracteres de inicialização
    // pois ele é uma constante de ponteiro que aponta para uma constante
    const char* const p4 = "Marcos";
    cout << *(p4 + 1) << endl;


    // o array aloca espaço para armazenar objetos
    // enquanto o ponteiro aloca espaço para endereços
    int vet2[4];
    int *pt; 

    // assim podemos concluir que o vet é um endereço constante
    // logo ele não pode ser inserido do lado esquerdo
    // vet2 = pt;
    // vet2 eh do tipo int* const

    return 0;
}