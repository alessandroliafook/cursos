#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // deve sempre começar com caractere _ ou com letra, 
    // podendo ser seguido por números 
    // int _idade;
    int idade;
    // int idade, idade2, idade3; // declarar variáveis em uma linha
    //  linguagem é case sensitive, logo o uso de maiúscula 
    // indicará uma variável diferente
    // int Idade;

    // atribuindo valor a variável
    idade = 20;
    cout << idade << endl;

    // possível declarar e atribuir na mesma linha
    float pi = 3.14;
    cout << pi << endl;
    return 0;
}
