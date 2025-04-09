enum TipoMotor {
    GASOLINA,
    ELETRICO,
    HIBRIDO
}

enum TipoCambio {
    MANUAL,
    AUTOMATICO
}

class Carro {
    private String modelo;
    private TipoMotor tipoMotor;
    private String cor;
    private TipoCambio cambio;
    private boolean tetoSolar;
    private boolean somPremium;
    private boolean bancosDeCouro;

    private Carro(CarBuilder builder) {
        this.modelo = builder.modelo;
        this.tipoMotor = builder.tipoMotor;
        this.cor = builder.cor;
        this.cambio = builder.cambio;
        this.tetoSolar = builder.tetoSolar;
        this.somPremium = builder.somPremium;
        this.bancosDeCouro = builder.bancosDeCouro;
    }

    @Override
    public String toString() {
        return "Carro: " + modelo + " (" + tipoMotor + ")\n" +
                "Cor: " + cor + "\n" +
                "Câmbio: " + cambio + "\n" +
                "Teto Solar: " + (tetoSolar ? "Sim" : "Não") + "\n" +
                "Som Premium: " + (somPremium ? "Sim" : "Não") + "\n" +
                "Bancos de Couro: " + (bancosDeCouro ? "Sim" : "Não");
    }

    // Classe Builder
    public static class CarBuilder {
        private String modelo;
        private TipoMotor tipoMotor;

        private String cor;
        private TipoCambio cambio;
        private boolean tetoSolar = false;
        private boolean somPremium = false;
        private boolean bancosDeCouro = false;

        public CarBuilder(String modelo, TipoMotor tipoMotor) {
            if (modelo == null || tipoMotor == null) {
                throw new IllegalArgumentException("Modelo e tipo de motor são obrigatórios.");
            }
            this.modelo = modelo;
            this.tipoMotor = tipoMotor;
        }

        public CarBuilder cor(String cor) {
            this.cor = cor;
            return this;
        }

        public CarBuilder cambio(TipoCambio cambio) {
            this.cambio = cambio;
            return this;
        }

        public CarBuilder incluirTetoSolar() {
            this.tetoSolar = true;
            return this;
        }

        public CarBuilder incluirSomPremium() {
            this.somPremium = true;
            return this;
        }

        public CarBuilder incluirBancosDeCouro() {
            this.bancosDeCouro = true;
            return this;
        }

        public Carro build() {
            int opcionais = 0;
            if (cor != null) opcionais++;
            if (cambio != null) opcionais++;
            if (tetoSolar) opcionais++;
            if (somPremium) opcionais++;
            if (bancosDeCouro) opcionais++;

            if (opcionais < 2) {
                throw new IllegalStateException("O carro precisa ter pelo menos 2 opcionais.");
            }

            return new Carro(this);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Carro carro = new Carro.CarBuilder("Sedan Turbo", TipoMotor.HIBRIDO)
                    .cor("Azul Metálico")
                    .cambio(TipoCambio.AUTOMATICO)
                    .incluirTetoSolar()
                    .incluirSomPremium()
                    .build();

            System.out.println(carro);

        } catch (Exception e) {
            System.out.println("Erro ao configurar carro: " + e.getMessage());
        }

        // Exemplo que falha por ter menos de 2 opcionais:
        try {
            Carro carroInvalido = new Carro.CarBuilder("Eco Compact", TipoMotor.ELETRICO)
                    .cor("Branco")
                    .build();
        } catch (Exception e) {
            System.out.println("\nFalha na montagem: " + e.getMessage());
        }
    }
}
