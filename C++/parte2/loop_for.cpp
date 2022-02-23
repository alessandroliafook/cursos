#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    for (int i = 1, j = 1;i <= 10; i++, j++)
    {
        cout << "i: " << i << " j: " << j << endl;
    }
    
    /*
        Cálculo do fatorial
        0! = 1! = 1
        3! = 3 * 2 * 1 = 6
        4! = 4 * 3 * 2 * 1 = 24
    */
    int num, fat = 1;
    cout << "Digite um número: ";
    cin >> num;

    for(int i = 2; i <= num; i++)
        fat *= i;

    cout << "Fatorial: " << fat << endl;
    return 0;
}
