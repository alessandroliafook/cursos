#include <iostream>

using namespace std;

struct Pessoa
{
    int idade;
    int numero_sorte;

    // struct aceita função construtora
    // Pessoa(int idade) {
    //     this->idade = idade;
    // }

    // é possível separar a declaração da implementação do construtor
    // porém será necessário definir o escopo que é o nome da struct
    Pessoa(int idade);
    
    //é possível realizar sobrecarga de construtor
    Pessoa(int idade, int num_sorte) {
        this->idade = idade;
        this->numero_sorte = num_sorte;
    }

    void setIdade(int idade){
        this->idade = idade;
    }

    int getIdade() {
        return idade;
    }
};

// forma de declarar a implementação da função de uma struct
// contendo a declaração expressa do escopo ao qual ela pertence
Pessoa::Pessoa(int idade) {
    this->idade = idade;
}

int main (int argc, char *argv[]) {

    // forma de declaração para o C
    // struct pessoa p;

    // em C++ é possível declarar de forma diferente
    // pois ela eh considerada um tipo primitivo de objeto
    Pessoa p(21);
    cout << p.idade << endl;

    // atributo público
    p.idade = 20;
    cout << p.idade << endl;

    p.setIdade(25);
    cout << p.getIdade() << endl;

    Pessoa p2(20, 10);
    cout << p2.getIdade() << " " << p2.numero_sorte << endl;

    return 0;
}