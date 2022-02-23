#include <iostream>
#include <string.h>

using namespace std;

void inverte(char nome[]) 
{
    // como contar o tamanho da string
    // int tam = 0;
    // while (nome[tam])
    //     tam++;

    // utilizando função para contar o tamanho da string
    int tam = strlen(nome);
    cout << "nome invertido: ";
    for (int i = tam; i >= 0; i--)
    {
        cout << nome[i];
    }
    cout << endl;
}

int main(int argc, char const *argv[])
{
    // no final do array de char é importante colocar o caractere null no final
    // ele sempre é avaliado como falso
    char array_nome[] = {'m', 'a', 'r', 'c', 'o', 's', '\0'};
    char nome[] = "marcos";
    int i = 0;

    // por padrão o último caractere sempre é o null
    // sendo avaliado como falso por padrão
    while (array_nome[i])
        cout << array_nome[i++];
    cout << endl;
    i = 0;

    // o do while executa sempre uma vez e avaliando
    // após a execução a continuidade
    do
        cout << nome[i];
    while (nome[i++] != '\0');
    cout << endl;
    inverte(nome);

    // FUNÇÕES ÚTEIS DA BIBLIOTECA STRING

    // isalpha verifica se o caractere é alfabético
    if(isalpha(nome[0]))
        cout << "caractere alfabetico" << endl;
    else
        cout << "caractere não alfabetico" << endl;

    // isdigit verifica se o caractere é numérico
    if(isdigit(nome[0]))
        cout << "caractere numerico" << endl;
    else
        cout << "caractere não numerico" << endl;
    
    // isupper verifica se o caractere está em caixa alta
    if(isupper(nome[0]))
        cout << "caractere maiúsculo" << endl;
    else
        cout << "caractere minúsculo" << endl;

    // islower verifica se o caractere está em caixa baixa
    if(islower(nome[0]))
        cout << "caractere minúsculo" << endl;
    else
        cout << "caractere maiúsculo" << endl;

    // isspace verifica se o caractere é espaço em branco
    if(isspace(nome[0]))
        cout << "caractere é espaço em branco" << endl;
    else
        cout << "caractere não é espaço em branco" << endl;

    char nome2[] = "castro";

    // strcmp compara duas strings e retorna 0 se as strings são iguais
    // ou retorna 1 se as strings forem diferentes
    if(strcmp(nome, nome2) == 0)
        cout << "as strings são iguais" << endl;
    else
        cout << "as strings são diferentes" << endl;

    // tolower converte o caractere na sua versão minúscula
    char c = 'M';
    c = tolower(c);
    cout << c << endl;

    // toupper converte o caractere na sua versão minúscula
    c = toupper(nome[0]);
    cout << c << endl;

    // strcat utilizada para concatenar o conteúdo da segunda string
    // dentro da primeira
    char nome3[100], sobrenome3[100];
    cout << "Digite seu nome: ";
    cin >> nome3;
    cout << "Digite seu sobrenome: ";
    cin >> sobrenome3;
    strcat(nome3, sobrenome3);
    cout << "Seu nome: " << nome3 << endl;

    // strstr eh utilizada para descobrir se a segunda string é
    // substring da primeira string
    char str[100], str2[100];
    cout << "Digite a primeira string: ";
    cin >> str;
    cout << "Digite a segunda string: ";
    cin >> str2;

    if(strstr(str, str2))
        cout << "eh substring" << endl;
    else 
        cout << "não eh substring" << endl;


    return 0;
}
