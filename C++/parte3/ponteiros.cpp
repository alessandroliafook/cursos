#include <iostream>

using namespace std;

// as funções realizam passagem de parâmetro por valor
// dessa forma as alterações que ocorrem dentro da
// função fica restringida ao escopo da função
// void foo(int n) 
// {
//     n = 20;
// }

// para realizar a passagem por referência, é necessário
// utilizar o ponteiro.
void foo(int* n) 
{
    *n = 30;
}

// no caso de vetor a referência é alterada
// logo ocorre efeito colateral, modificando
// o valor fora da função
void colateral(int aux[]){
    aux[0] = 100;
}

int main(int argc, char const *argv[])
{

    int var = 10;
    // declarando ponteiro
    // o simbolo * indica que é um ponteiro
    // do tipo que o antecede
    int* pvar;

    //inicializando o ponteiro
    // o simbolo & antes da variável retorna a referência
    // para o ponteiro da mesma
    pvar = &var;

    // para exebir o conteúdo da variável do tipo ponteiro
    // tem que utilizar o simbolo * antes da variável
    cout << *pvar << endl;

    // para alterar o conteúdo do ponteiro utilizar o simbolo *
    // antes do nome, e essa alteração também modifica o valor
    // da variável utilizada como referência
    *pvar = 20;
    cout << *pvar << endl;
    cout << var << endl;

    // aceita as duas formas de passar o endereço
    // foo(pvar);
    foo(&var);
    cout << *pvar << endl;
    cout << var << endl;

    // é possível alocar memória no C++ utilizando a palavra
    // reservada 'new'

    //dessa forma está sendo alocado espaço na memória para 10 inteiros
    int* vet = new int[10];
    int aux[10];

    *(vet + 0) = 10;
    *(vet + 1) = 20;
    // o nome do vetor já é o apontamento para o endereço do primeiro elemento
    *(aux) = 10;
    *(aux + 1) = 20;

    // é necessário colocar os parênteses pois o operador * tem precedência
    // sobre a adição, dessa forma o fluxo seria recuperar o valor no endereço
    // de memória antes da adição, e após isso realizar a soma sobre o conteúdo,
    // dessa forma o parênteses é utilizado para garantir que primeiro será atualizado
    // o valor do ponteiro, e só depois que será realizada a busca do seu conteúdo
    cout << *(aux + 0) << " " << *(aux + 1) << endl;
    cout << *(aux) << " " << *(aux + 1) << endl;
    cout << *(vet + 0) << " " << *(vet + 1) << endl;
    cout << *(vet) << " " << *(vet + 1) << endl;
    
    // acessando os elementos do vetor utilizando os indices
    cout << aux[0] << " " << aux[1] << endl;
    cout << vet[0] << " " << vet[1] << endl;
    
    colateral(aux);
    cout << *(aux + 0) << " " << *(aux + 1) << endl;

    colateral(vet);
    cout << *(vet + 0) << " " << *(vet + 1) << endl;

    return 0;
}
