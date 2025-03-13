abstract class Veiculo {
    protected modelo: string;
    protected capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;   
    }

    abstract calcularConsumo(distancia: number, passageiros: number): number;
}

class Taxi extends Veiculo {
    private taxaPorPassageiro: number;

    constructor(modelo: string, capacidade: number, taxaPorPassageiro: number){
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distancia: number, passageiros: number = 1) {
        return (distancia * passageiros) + (passageiros * this.taxaPorPassageiro)
    }
}

class Onibus extends Veiculo  {
    private consumoPorKm: number

    constructor(modelo: string, capacidade: number, consumoPorKm: number) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia: number) {
        return distancia * this.consumoPorKm
    }
}

let o = new Onibus("Mercedes", 30, 50)
let t = new Taxi("Ford", 4, 5)

console.log(o.calcularConsumo(10))
console.log(t.calcularConsumo(20, 2))

