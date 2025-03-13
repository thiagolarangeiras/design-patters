abstract class Publicacao {
    protected titulo: string;
    protected autor: string;
    protected descricao: string;

    constructor(titulo: string, autor: string, descricao: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }
}

class Artigo extends Publicacao {
    private numeroDePalavras: number;

    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
        super(titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }

    exibirResumo(): string {
        return this.descricao.substring(0, this.numeroDePalavras);
    }
}

class Video extends Publicacao {
    private duracao: number;

    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
        super(titulo, autor, descricao);
        this.duracao = duracao;
    }

    exibirResumo(): string {
        return "resumo";
    }
}