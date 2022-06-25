#include <iostream>

using namespace std;

void printArgumentosMain(int argc, char *argv[]);

int main (int argc, char *argv[]) {

    // criando um bloco de memória para 100 caracteres
    // a palavra reservada new retorna o ponteiro para o bloco
    // diferente de outras variáveis a pilha de memória não é alocada
    // até o momento da execução, o que significa que o tamanho do array
    // não é limitado a constantes
    char* array = new char[100];

    //argc significa argument counter
    cout << "argc: " << argc << endl;

    // argv significa argument values e é um array de ponteiros para string
    // que contem os argumentos passados no programa, sendo o primeiro argumento
    // sempre o nome do programa
    cout << "argv[0]: " << argv[0] << endl;

    // revisando array de ponteiros
    int n1 = 10, n2 = 20, n3 = 30;
    int* parray[3] = {&n1, &n2, &n3};

    // accessando elementos do array de ponteiros
    cout << *parray[0] << endl;
    cout << *parray[1] << endl;
    cout << *parray[2] << endl;

    // exibindo informações dos parametros
    printArgumentosMain(argc, argv);


    return 0;
}

void printArgumentosMain(int argc, char *argv[]) {
    cout << "Quantidade de argumentos: " << argc << endl;
    cout << "Argumentos passados:" << endl;

    for (int i = 0; i < argc; i++)
    {
        cout << argv[i] << endl;
    }
     
}