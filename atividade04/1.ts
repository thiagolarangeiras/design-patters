// Fabricação de brinquedos
// Uma fábrica de brinquedos deseja criar diferentes tipos de brinquedos com base no material
// usado na fabricação. Existem dois materiais principais: Plástico e Madeira.
// Cada brinquedo deve implementar um método play(), que exibe uma mensagem dizendo como
// ele é usado.
// Tarefa
// 1. Implemente uma Abstract Factory que possa criar dois tipos de brinquedos: Carrinho e
// Boneca.
// 2. Crie duas fábricas concretas: Fábrica de Plástico e Fábrica de Madeira.
// 3. No código cliente, instancie cada fábrica e teste os brinquedos criados.

interface Carrinho {
    criar(): void;
}

class CarrinhoPlastico implements Carrinho {
    criar(): void {
        console.log("Carrinho de Plastico");
    }
}

class CarrinhoMadeira implements Carrinho {
    criar(): void {
        console.log("Carrinho de Madeira");
    }
}

interface Boneca {
    criar(): void;
}

class BonecaPlastico implements Boneca {
    criar(): void {
        console.log("Boneca de plastico");
    }
}

class BonecaMadeira implements Boneca {
    criar(): void {
        console.log("Boneca de Madeira");
    }
}

interface FabricaBrinquedos {
    criarCarrinho(): Carrinho;
    criarBoneca(): Boneca;
}

class FabricaMadeira implements FabricaBrinquedos {
    criarCarrinho(): Carrinho {
        return new CarrinhoMadeira();
    }

    criarBoneca(): Boneca {
        return new BonecaMadeira();
    }
}

class FabricaPlastico implements FabricaBrinquedos {
    criarCarrinho(): Carrinho {
        return new CarrinhoPlastico();
    }

    criarBoneca(): Boneca {
        return new BonecaPlastico();
    }
}

class Testar {
    private factory: FabricaBrinquedos;

    constructor(factory: FabricaBrinquedos) {
        this.factory = factory;
    }

    criar(): void {
        this.factory.criarCarrinho().criar();
        this.factory.criarBoneca().criar();
    }
}

const x = new Testar(new FabricaMadeira);
x.criar()

const y = new Testar(new FabricaPlastico);
y.criar()