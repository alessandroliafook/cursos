#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // variável de controle do loop
    int n = 1;
    while (n <= 10) 
    {
        // if (n % 2 != 0) 
        // {
        //     n += 1;
        // continue vai para o início do laço respeitando o que já foi executado
        //     continue;
        // }
        int i = 0;
        while (i++ < 3) 
            cout << "Numero: " << n << endl;

        cout << n++ << endl;
        // break interrompe a execução do laço
        // if (n > 50) break;

    }
    return 0;
}

