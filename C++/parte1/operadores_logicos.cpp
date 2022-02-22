#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int n = 11;

    if (n % 2 == 0 && n < 20)
    {
        cout << "Número par E menor que 20!" << endl;
    }

    if (n % 2 == 0 || n < 20)
    {
        cout << "Número par OU menor que 20!" << endl;
    }

    if (!n % 2 == 0)
        cout << "Número ímpar!" << endl;

    bool var = 10 > 20;

    // true = 1
    // false = 0
    cout << var << endl;

    if (var)
    {
        cout << "verdadeiro" << endl;
    }
    else 
    {
        cout << "falso" << endl;
    }

    bool var1 = false, var2 = true;
    if (!var1 && var2)
        cout << "aprendendo c++" << endl;
    
    return 0;
}
