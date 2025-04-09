// Personalização de Veículos Futuristas
// Uma empresa desenvolve veículos futuristas que podem ser configurados para diferentes
// ambientes:
// ● Terra → Veículos como Carros Voadores e Motos Autônomas
// ● Espaço → Veículos como Naves e Exploradores Robóticos
// Cada veículo tem dois aspectos principais:
// 1. Modo de Propulsão (ex: Motor a jato, Plasma, etc.)
// 2. Sistema de Controle (ex: Inteligência Artificial, Controle Manual, etc.)
// Tarefa
// 1. Modele uma Abstract Factory que permita criar veículos futuristas completos
// (propulsão + sistema de controle).
// 2. Crie duas fábricas concretas: Fábrica de Veículos para Terra e Fábrica de Veículos para
// Espaço.
// 3. No código cliente, crie uma função que permita configurar um veículo futurista
// escolhendo a fábrica correta

interface Propulsao {
    tipoPropulsao(): string;
}

interface SistemaControle {
    tipoControle(): string;
}

interface FabricaVeiculoFuturista {
    criarPropulsao(): Propulsao;
    criarSistemaControle(): SistemaControle;
}

class PropulsaoTerra implements Propulsao {
    tipoPropulsao(): string {
        return "Motor a jato terrestre";
    }
}

class SistemaControleTerra implements SistemaControle {
    tipoControle(): string {
        return "Controle por Inteligência Artificial (IA) de solo";
    }
}

class FabricaVeiculoTerra implements FabricaVeiculoFuturista {
    criarPropulsao(): Propulsao {
        return new PropulsaoTerra();
    }

    criarSistemaControle(): SistemaControle {
        return new SistemaControleTerra();
    }
}

class PropulsaoEspaco implements Propulsao {
    tipoPropulsao(): string {
        return "Propulsor de Plasma";
    }
}

class SistemaControleEspaco implements SistemaControle {
    tipoControle(): string {
        return "Controle Autônomo Espacial com IA Avançada";
    }
}

class FabricaVeiculoEspaco implements FabricaVeiculoFuturista {
    criarPropulsao(): Propulsao {
        return new PropulsaoEspaco();
    }

    criarSistemaControle(): SistemaControle {
        return new SistemaControleEspaco();
    }
}

function configurarVeiculo(fabrica: FabricaVeiculoFuturista): void {
    const propulsao = fabrica.criarPropulsao();
    const controle = fabrica.criarSistemaControle();

    console.log("Veículo Configurado:");
    console.log("- Propulsão: " + propulsao.tipoPropulsao());
    console.log("- Sistema de Controle: " + controle.tipoControle());
}

// Exemplo de uso:
const veiculoTerra = new FabricaVeiculoTerra();
configurarVeiculo(veiculoTerra);

console.log("-----------");

const veiculoEspaco = new FabricaVeiculoEspaco();
configurarVeiculo(veiculoEspaco);