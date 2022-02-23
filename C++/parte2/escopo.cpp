#include <iostream>

using namespace std;

int num_global = 12;

void foo()
{
    int num = 10;
    // a variável estática não pode ser acessada fora da função,
    // porém não é destruída após a execução da função
    // assim caso a função seja chamada ela continua a incrementar
    static int num_static = 1;
    cout << "variável local: " << num << endl;
    cout << "variável global: " << num_global << endl;
    cout << "variável estática: " << num_static << endl << endl;
    num_static++;
}

int main(int argc, char const *argv[])
{
    foo();
    // a variável global pode ser modificada em uma parte do programa
    // e isso irá alterar o valor para todos os locais que acessarem
    // a mesma após a alteração.
    num_global = 20;
    foo();
    foo();
    return 0;
}
