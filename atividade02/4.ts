class Item {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    protected numero: number;
    protected items: Item[] = [];

    constructor(numero: number) {
        this.numero = numero;
    }

    adicionarItem(item: Item){
        this.items.push(item); 
    }

    calcularTotal() {
        let soma = 0;
        this.items.forEach((value) => {
            soma += value.preco;
        }); 
        return soma;
    }
}

class PedidoDelivery extends Pedido {
    private taxaDeEntrega: number;

    constructor(numero: number, taxaDeEntrega: number) {
        super(numero);
        this.taxaDeEntrega = taxaDeEntrega;
    }

    calcularTotal() {
        let soma = 0;
        this.items.forEach((value) => {
            soma += value.preco;
        }); 
        return soma + this.taxaDeEntrega;
    }
}

let item1 = new Item("presunto", 10);
let item2 = new Item("quexo", 20);

let p = new Pedido(1);
p.adicionarItem(item1);
p.adicionarItem(item2);
console.log(p.calcularTotal());

let pd = new PedidoDelivery(2, 20);
pd.adicionarItem(item1);
pd.adicionarItem(item2);
console.log(pd.calcularTotal());