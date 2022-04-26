#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int* vet = new int[10];
    int aux[3];

    aux[0] = 10;
    aux[1] = 20;
    aux[2] = 30;

    for (int i = 0; i < sizeof(aux)/sizeof(int); i++)
        cout << aux[i] << endl;

    // alocando os valores apontando para o endereço de memória
    cout << "Digite um numero: ";
    cin >> *(vet);
    cout << "Voce digitou: " << *(vet) << endl;

    // é possível liberar a memória do array, o que
    // o torna inutilizável
    delete[] vet;

    //é considera uma boa prática apagar o conteúdo de um 
    // ponteiro
    vet = NULL;
    cout << "Voce digitou: " << *(vet) << endl;

    // para desalocar a memória individual basta não utilizar o []
    int var = 10;
    int* pvar = &var;
    cout << *pvar << endl;

    delete pvar;
    pvar = NULL;

    return 0;
}
