#include <iostream>

using namespace std;

int my_strlen(char * str)
{
    int tam = 0;
    while(*str++ != '\0')
        tam++;

    return tam;
}

// função que concatena o conteúdo do segundo parâmetro
// dentro do primeiro parametro, seguindo o padrão
// da biblioteca string
void my_strcat_aux(char *dest, char *orig) 
{
    int tam = my_strlen(dest);
    char *start_dest = &dest[tam];
    char *start_orig = orig;
    int i = 0;
    do
    {
        dest[tam++] = *(start_orig++);
    }
    while(*start_orig != '\0');
}

// função deve sempre retornar ponteiro
char * my_strcat(char *dest, char *orig)
{
    int tam_dest = my_strlen(dest);
    int tam_orig = my_strlen(orig);
    char * resultado = new char[tam_dest + tam_orig];

    // forma elegante de resolver o problema    
    // my_strcat_aux(resultado, dest);
    // my_strcat_aux(resultado, orig);

    // forma extensiva e repetitiva dada na aula
    char *pstr = resultado;
    while(*dest != '\0')
    {
        *pstr = *dest;
        pstr++;
        dest++;
    }
    while(*orig != '\0')
    {
        *pstr = *orig;
        pstr++;
        orig++;
    }
    *pstr = '\0';
    return resultado;
}

int main(int argc, char const *argv[])
{
    
    char * nome = new char[100];
    char * sobrenome = new char[100];

    cout << "Digite o nome: ";
    cin >> nome;
    cout << "Digite o sobrenome: ";
    cin >> sobrenome;

    // para criar a string utilizando o padrão do string.h
    // basta seguir o modelo abaixo
    // char espaco[] = " ";
    // char * p_espaco = &espaco[0];
    // char * nome_completo = new char[200];
    // my_strcat_aux(nome_completo, nome);
    // my_strcat_aux(nome_completo, p_espaco);
    // my_strcat_aux(nome_completo, sobrenome);

    cout << "Nome completo: " << my_strcat(nome, sobrenome) << endl;

    return 0;
}
