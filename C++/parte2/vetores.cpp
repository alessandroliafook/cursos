#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // declarando e inicializando o vetor
    // o comprimento do vetor pode ser omitido se houver atribuição
    int vetor[4] = {1,2,3,4};

    for (int i = 0; i < 4; i++)
        cout << vetor[i] << " ";

    cout << endl << "segundo elemento: " << vetor[1] << endl;
    // caso o tamanho passado no array seja maior que o tamanho,
    // irá retornar o conteúdo com um valor estranho, pois aponta
    // para uma posição de memória não reservada, logo,
    // que pode estar sendo acessada em outro ponto do código.
    cout << "elemento posição 4: " << vetor[4] << endl;
    
    // a função sizeof retorna o tamanho em bytes: int tem tamanho 4 bytes
    cout << "Tamanho: " << sizeof(vetor) << endl;
    
    // char tem tamanho 1 byte
    char vetor_char[] = {'1','2','3','4'};
    cout << "Tamanho Vetor de Char: " << sizeof(vetor_char) << endl;

    return 0;
}
