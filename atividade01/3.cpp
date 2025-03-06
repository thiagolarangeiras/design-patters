invlude 


Conta contas[] = [];

class Conta {
public:
    double numero;
    double saldo;
}




function criarConta(numero: number, saldoInicial: number): void {
    contas.push({ numero, saldo: saldoInicial });
    console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
}

function depositar(numeroConta: number, valor: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        conta.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
    } else {
        console.log("Conta não encontrada.");
    }
}

function sacar(numeroConta: number, valor: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        if (conta.saldo >= valor) {
            conta.saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    } else {
        console.log("Conta não encontrada.");
    }
}

function consultarSaldo(numeroConta: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        console.log(`Saldo da conta ${numeroConta}: R$${conta.saldo}.`);
    } else {
        console.log("Conta não encontrada.");
    }
}

criarConta(123, 1000);
depositar(123, 500);
sacar(123, 200);
consultarSaldo(123);