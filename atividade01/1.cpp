#include "stdio.h"

class Retangulo {
public:
    double largura;
    double altura;
    double area;

    Retangulo(double largura, double altura){
        this->largura = largura;
        this->altura = altura;
    }
    
    double calcularAreaRetangulo() {
        return largura * altura;
    }
    void exibirArea() {
        double area = calcularAreaRetangulo();
        printf("A área do retângulo é: %f", area);
    }
};

int main() {
    Retangulo* ret = new Retangulo(10.0, 5.0);
    ret->exibirArea();
    return 0;
}