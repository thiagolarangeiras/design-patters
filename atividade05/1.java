// Montagem de Pedidos em um Restaurante
// Cenário:
// Um restaurante deseja um sistema para montar pedidos personalizados de hambúrgueres.
// Requisitos:
// ● Todo pedido deve conter um tipo de pão e uma proteína (carne, frango ou vegetariano).
// ● Ingredientes opcionais: queijo, alface, tomate, cebola, molho especial.
// ● O pedido pode incluir ou não uma bebida.
// ● O Builder deve permitir criar pedidos de forma flexível e organizada.
// Crie a classe BurgerOrderBuilder que permita a personalização completa do pedido antes de finalizá-lo.

class Pedido {
	String tipoPao = "branco";
	String proteina = "carne";
	Boolean queijo = true;
	Boolean alface = true;
	Boolean tomate = true; 
	Boolean cebola = true; 
	Boolean molhoEspecial = true;
	String bebida = "refri";
}

class BurgerOrderBuilder {
	private Pedido pedido;
	BurgerOrderBuilder() { 
		this.pedido = new Pedido();
	};
	
	Pedido getPedido() {
		return pedido;
	};

	void setPao(String pao) {
		this.pedido.tipoPao = pao;
	}

	void setBebidaRefri(){
		this.pedido.bebida = "refri";
	}

	void setBebidaAgua(){
		this.pedido.bebida = "agua";
	}

	void setProteinaCarne() {
		this.pedido.proteina = "Carne";
	}

	void setProteinaFrango() {
		this.pedido.proteina = "Frango";
	}

	void setProteinaVegano() {
		this.pedido.proteina = "Vegano";
	}

	void removerExtras() {
		Boolean queijo = false;
		Boolean alface = false;
		Boolean tomate = false; 
		Boolean cebola = false; 
		Boolean molhoEspecial = false;
	}

	void adicionarExtras() {
		Boolean queijo = true;
		Boolean alface = true;
		Boolean tomate = true; 
		Boolean cebola = true; 
		Boolean molhoEspecial = true;
	}


	void adicionarQueijo() {
		this.pedido.queijo = true;
	}

	void adicionarAlface() {
		this.pedido.alface = true;
	}

	void adicionarTomate() {
		this.pedido.tomate = true;
	}

	void adicionarCebola() {
		this.pedido.cebola = true;
	}

	void adicionarMolhoEspecial() {
		this.pedido.molhoEspecial = true;
	}

	void removerQueijo() {
		this.pedido.queijo = false;
	}

	void removerAlface() {
		this.pedido.alface = false;
	}

	void removerTomate() {
		this.pedido.tomate = false;
	}

	void removerCebola() {
		this.pedido.cebola = false;
	}

	void removerMolhoEspecial() {
		this.pedido.molhoEspecial = false;
	}
} 

class BurgerOrderBuilderDiretor {
	private BurgerOrderBuilder b;
	BurgerOrderBuilderDiretor(BurgerOrderBuilder b) {
		this.b = b;
	}

	void vegano() {
		this.b.setPao("verde");
		this.b.setProteinaVegano();
		this.b.removerQueijo();
		this.b.removerMolhoEspecial();
		this.b.setBebidaAgua();
	}
}

public class Main {
	public static void main(String args[]){
		BurgerOrderBuilder a = new BurgerOrderBuilder();
		BurgerOrderBuilderDiretor b = new BurgerOrderBuilderDiretor(a);
		b.vegano();
		Pedido c = a.getPedido();
		System.out.println(c.tipoPao);
		System.out.println(c.proteina);

	}
}