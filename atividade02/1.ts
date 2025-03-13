abstract class Funcionario {
    protected nome: string;
    protected salario: number;
    protected cargo: string;
    
    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo
    }

    calcularVencimentos(): number {
        return this.salario;
    }
}

class FuncionarioEfetivo extends Funcionario  {
    private bonusAnual: number;

    constructor(nome: string, salario: number, cargo: string, bonusAnual: number) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    calcularVencimentos(): number {
        return this.salario + this.bonusAnual;
    }
}

class FuncionarioTercerizado extends Funcionario {
    custoPorProjeto: number;

    constructor(nome: string, salario: number, cargo: string, custoPorProjeto: number) {
        super(nome, salario, cargo);
        this.custoPorProjeto = custoPorProjeto;
    }

    calcularVencimentos(): number {
        return this.salario + this.custoPorProjeto;
    }
}

let funcionarioEfetivo = new FuncionarioEfetivo("a", 20, "cargo1", 20);
let funcionarioTercerizado = new FuncionarioTercerizado("b", 20, "cargo2", 20);
console.log(funcionarioEfetivo.calcularVencimentos())
console.log(funcionarioTercerizado.calcularVencimentos())
