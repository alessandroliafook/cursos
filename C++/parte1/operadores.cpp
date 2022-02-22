#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // OPERADORES BINÁRIOS
    cout << "Operadores Binários" << endl;
    int n1, n2, resultado;

    n1 = 10;
    n2 = 20;

    resultado = n1 + n2;
    cout << resultado << endl;

    resultado = n1 - n2;
    cout << resultado << endl;

    resultado = n1 * n2;
    cout << resultado << endl;

    float res;
    // para poder obter float de uma divisão é necessário realizar cast
    res = (float)n1 / n2;
    cout << res << endl;

    resultado = n1 % n2;
    cout << resultado << endl;

    //  OPERADORES UNÁRIOS
    cout << "Operadores Unários" << endl;
    int n = 5;
    n++;
    cout << n << endl;

    n--;
    cout << n << endl;

    int n3 = -n;
    cout << n3 << endl;

    //  no caso dos operadores ++ e -- a ordem importa
    cout << n++ << endl;
    cout << ++n << endl;

    // OPERADORES ESPECIAIS
    cout << "Operadores Especiais" << endl;
    // n = n + 1;
    n += 1;
    cout << n << endl;

    // n = n - 1;
    n -= 1;
    cout << n << endl;

    // n = n * 2;
    n *= 2;
    cout << n << endl;

    // n = n / 2;
    n /= 2;
    cout << n << endl;

    // eh possível controlar a precedência utilizando os parênteses
    n = 10 + 20 / 2;
    cout << n << endl;

    n = (10 + 20) / 2;
    cout << n << endl;

    return 0;
}
