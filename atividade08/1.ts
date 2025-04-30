// Exercícios
// Contexto
// Uma rede de contatos pessoal pode ser representada como uma estrutura hierárquica em árvore,
// onde existem tanto pessoas individuais quanto grupos de pessoas (como "Família", "Colegas de
// Trabalho", "Amigos", etc.). Dentro desses grupos, pode haver subgrupos (como "Primos" dentro de
// "Família" ou "Equipe de Desenvolvimento" dentro de "Colegas de Trabalho").
// O padrão de projeto Composite é ideal para modelar esse tipo de estrutura, pois permite tratar
// objetos individuais e composições de objetos de maneira uniforme.
// Objetivo
// Desenvolver uma aplicação que implemente o padrão Composite para representar uma rede de
// contatos pessoal, permitindo organizar pessoas em grupos e subgrupos, além de possibilitar a
// navegação e busca por essa estrutura.

abstract class Component {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    exibir(): void { throw new Error(""); }

    adicionar(c: Component): void { throw new Error(""); }

    remover(c: Component): void { throw new Error(""); }

    recuperarFilho(i: number): Component { throw new Error(""); }
}

class Group extends Component {
    public components: Component[];

    adicionar(c: Component): void { this.components.push(c) }

    exibir(): void {
        console.log(this.name);
        this.components.forEach((x, i) => {
            console.log("\t")
            x.exibir();
            console.log("\n")
        });
    }
    
    remover(c: Component): void {
        let remove: number = 0; 
        this.components.forEach((x, i) => {
            if (x == c) {
                remove = i;
                return;
            }
        }); 
        this.components.splice(remove);
    }

    recuperarFilho(i: number): Component { return this.components[i] }
}

class Contact extends Component {
    phone1: string;
    phone2: string;

    exibir(): void { 
        console.log(this.name);
        console.log("\n");
        console.log("\t");
        console.log(this.phone1);
        console.log("\n");
        console.log("\t");
        console.log(this.phone2);
    }
}

const a = new Group("Default");
const contato1 = new Contact("Mom");
contato1.phone1= "+55 (99) 99999-9999"
contato1.phone2= "+55 (99) 99999-9999"
a.adicionar(contato1);
console.log(JSON.stringify(a))
a.exibir()