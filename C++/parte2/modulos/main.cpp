// Para compilar o código é necessário compilar todos os arquivos 
// em todos os diretórios dessa forma: $g++ *.cpp */*.cpp

#include <iostream>
#include "bib/my_math.h"

using namespace std;

int main(int argc, char const *argv[])
{
    int n = 5, alt = 3;
    cout << "Fatorial de " << n << ": " << fatorial(n) << endl;
    cout << "Área do quadrado com lado " << n << ": " << area_quadrado(n) << endl;
    cout << "Área do retângulo BxA " << n << "x" << alt << ": " << area_retangulo(n, alt) << endl;
    return 0;
}
