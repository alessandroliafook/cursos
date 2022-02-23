#include <iostream>

using namespace std;

// O tipo de retorno não serve para diferenciar funções
// apenas o número de parametros e/ou o tipo deles e/ou a ordem
void mensagem(int n, char c)
{
    cout << "numero: " << n << endl;
    cout << "caractere: " << c << endl;
}

void mensagem(char c, int n)
{
    cout << "caractere: " << c << endl;
    cout << "numero: " << n << endl;
}

int soma(int n1, int n2) 
{
    return n1 + n2;
}

int soma(int n1, int n2, int n3) 
{
    return n1 + n2 + n3;
}

int main(int argc, char const *argv[])
{
    mensagem(soma(5, 3), 'a');
    mensagem('b', soma(2, 3, 4));

    return 0;
}
