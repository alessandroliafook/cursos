#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // variável do tipo char é sempre entre aspas simples
    char c = 'a';
    cout << c << endl;

    // possível imprimir o valor em asc
    cout << (int)c << endl;

    // eh possível somar caracteres
    char c1 = 'b';
    int soma = c + c1;
    cout << soma << endl;

    // para indicar que o caractere de ' não é encerramento deve usar
    //  o caractere \ como precedente
    c = '\'';
    cout << c << endl;

    return 0;
}
