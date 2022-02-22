#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int dinheiro = 20;
    if(dinheiro > 10) 
    {
        cout << "Eu vou ao cinema!" << endl;
    } 
    else 
    {
        cout << "Não vou ao cinema!" << endl;
    }

    int num = 10;
    if (num > 10) 
    {
        cout << "Número mais do que 10!" << endl;
    }
    if (num == 10) 
    {
        cout << "Número igual a 10!" << endl;
    } 
    if (num >= 10) 
    {
        cout << "Número maior ou igual a 10!" << endl;
    } 
    if (num < 10) 
    {
        cout << "Número menor que 10!" << endl;
    } 
    if (num <= 10) 
    {
        cout << "Número menor ou igual a 10!" << endl;
        num++;
    }
    // possível não utilizar chaves se tiver apenas 1 linha após a condição
    if (num != 10)
        cout << "Número diferente de 10!" << endl;
    num--;

    // Aninhamentos
    if (num > 5)
    {
        if (num <= 10)
        {
            cout << "Número maior do que 5 e menor ou igual a 10!" << endl;
        }
        
    }
    
    return 0;
}
