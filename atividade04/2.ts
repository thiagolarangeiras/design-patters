// Criação de Criaturas Fantásticas
// Um jogo de RPG precisa de um sistema para criar criaturas mágicas de diferentes reinos:
// ● Reino do Fogo → Criaturas como Dragões e Salamandras
// ● Reino da Água → Criaturas como Serpentes Marinhas e Tritões
// ● Dragões e Serpentes Marinhas são criaturas fortes
// ● Salamandras e Tritões criaturas velozes
// Cada criatura deve ter um método attack(), que imprime uma mensagem personalizada de ataque.
// Tarefa
// 1. Modele uma Abstract Factory para criar criaturas mágicas.
// 2. Crie fábricas concretas para os dois reinos (Reino do Fogo e Reino da Água).
// 3. No código cliente, instancie cada fábrica e faça as criaturas atacarem

interface Rapido {
    attack(): void;
}

interface Lento {
    attack(): void;
}

class Dragao implements Lento {
    attack(): void {
        console.log("Dragao ataca");
    }
}

class Salamandra implements Rapido {
    attack(): void {
        console.log("Salamandra ataca");
    }
}

class SerpenteMarinha implements Lento {
    attack(): void {
        console.log("Serpente marinha ataca");
    }
}

class Tritao implements Rapido {
    attack(): void {
        console.log("Tritao ataca");
    }
}

interface Reinos {
    mostroRapido(): Rapido;
    mostroLento(): Lento;
}

class ReinoFogo implements Reinos {
    mostroRapido(): Rapido {
        return new Salamandra();
    }

    mostroLento(): Lento {
        return new Dragao();
    }
}

class ReinoAgua implements Reinos {
    mostroRapido(): Rapido {
        return new SerpenteMarinha();
    }

    mostroLento(): Lento {
        return new Tritao();
    }
}

class Testar {
    private factory: Reinos;

    constructor(factory: Reinos) {
        this.factory = factory;
    }

    testar(): void {
        this.factory.mostroLento().attack();
        this.factory.mostroRapido().attack();
    }
}

const x = new Testar(new ReinoFogo);
x.testar()

const y = new Testar(new ReinoAgua);
y.testar()