#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int num = 10;

    // se não tiver o break no final do case
    // ele irá executar todas as instruções abaixo
    switch (num)
    {
    case 9:
        cout << "numero 9" << endl;
        break;
    case 10:
        cout << "numero 10" << endl;
        break;
    case 11:
        cout << "numero 11" << endl;
        break;
    default:
        cout << "numero não encontrado" << endl;
        break;
    }

    char op = 'Q';
    switch (op)
    {
    case 'Q':
        cout << "Você saiu do sistema" << endl;
    case 'q':
        cout << "Você saiu do sistema" << endl;
        break;
    default:
        cout << "Comando inexistente" << endl;
        break;
    }
    return 0;
}
