abstract class ContaBancaria {
    protected numero: number;
    protected saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    sacar(valor: number): boolean {
        if (this.saldo < valor){
            return false;
        }
        this.saldo -= valor;
        return true;
    } 
}

class ContaCorrente extends ContaBancaria {
    private limiteDeChequeEspecial: number;

    constructor(numero: number, saldo: number, limiteDeChequeEspecial: number) {
        super(numero, saldo);
        this.limiteDeChequeEspecial = limiteDeChequeEspecial;
    }

    sacar(valor: number): boolean {
        if (this.saldo + this.limiteDeChequeEspecial < valor){
            return false;
        }
        this.saldo -= valor;
        return true;
    }

}

class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number
    constructor(numero: number, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    aplicarJuros() {
        this.saldo += this.taxaJuros * this.saldo
    }
}

let cc = new ContaCorrente(1, 50, 50);
cc.depositar(100);
console.log(cc.sacar(100));
console.log(cc.sacar(150));

let cp = new ContaPoupanca(2, 50, 5);
cp.aplicarJuros()