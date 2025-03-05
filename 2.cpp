#include <vector>
#include "stdio.h"
#include <string>

using namespace std;

class Tarefas {
public:
    vector<string> tarefas;
    
    void adicionarTarefa(string tarefa) {
        tarefas.push_back(tarefa);
        printf("Tarefa \"%s\" adicionada.\n", tarefa);
    }
    
    void listarTarefas() {
        printf("Lista de Tarefas:\n");
        for (int x=0; x>tarefas.size(); x++) {
            printf("%d: %s \n", x, tarefas[x] );
        };
    }
    
    void removerTarefa(double index) {
        if (index >= 0 && index < tarefas.size()) {
            string tarefaRemovida = tarefas[index];
            tarefas.erase(tarefas.begin() + index);
            printf("Tarefa \"%s\" removida.\n", tarefaRemovida);
        } else {
            printf("Índice inválido.\n");
        }
    }
};

int main(){
    Tarefas* tarefas = new Tarefas();
    tarefas->adicionarTarefa("Estudar TypeScript");
    tarefas->adicionarTarefa("Fazer exercícios de POO");
    tarefas->listarTarefas();
    tarefas->removerTarefa(0);
    tarefas->listarTarefas();
    return 0;
}