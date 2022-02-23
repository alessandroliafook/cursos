#include <iostream>

using namespace std;

// As funções devem sempre ser declaradas antes de sua utilização
// ou deve haver a declaração do seu protótipo
bool par(int num) 
{
    if (num % 2 == 0)
        return true;

    return false;
}

void mensagem();
void mensagem(int n);

int main(int argc, char const *argv[])
{
    int n;
    mensagem();
    cout << "Digite um número: ";
    cin >> n;
    mensagem(n);

    if(par(n))
        cout << " eh par." << endl;
    else
        cout << " eh ímpar." << endl;
    return 0;
}

// definição da função pode vir depois do seu uso, se o protótipo
// tiver sido declarado, caso contrário, a declaração da função
// devem sempre vir antes
void mensagem() {
    cout << "aprendendo c++" << endl;
}
// eh possível realizar sobrecarga da função desde que os parâmetros
// não sejam iguais, considerando os tipos e/ou número
void mensagem(int n) {
    cout << "O número " << n;
}