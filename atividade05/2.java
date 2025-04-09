enum TipoQuarto {
    STANDARD,
    LUXO,
    PRESIDENCIAL
}

class HotelReservation {
    private TipoQuarto tipoQuarto;
    private int numeroNoites;
    private boolean cafeDaManha;
    private boolean vistaParaOMar;
    private boolean wifiPremium;
    private boolean lateCheckout;

    // Construtor privado
    private HotelReservation(HotelReservationBuilder builder) {
        this.tipoQuarto = builder.tipoQuarto;
        this.numeroNoites = builder.numeroNoites;
        this.cafeDaManha = builder.cafeDaManha;
        this.vistaParaOMar = builder.vistaParaOMar;
        this.wifiPremium = builder.wifiPremium;
        this.lateCheckout = builder.lateCheckout;
    }

    // Getters (opcional, se quiser acessar os campos)
    public String toString() {
        return "Reserva de Quarto: " + tipoQuarto +
                "\nNoites: " + numeroNoites +
                "\nCafé da manhã: " + (cafeDaManha ? "Sim" : "Não") +
                "\nVista para o mar: " + (vistaParaOMar ? "Sim" : "Não") +
                "\nWi-Fi Premium: " + (wifiPremium ? "Sim" : "Não") +
                "\nLate Checkout: " + (lateCheckout ? "Sim" : "Não");
    }

    // Builder como inner static class
    public static class HotelReservationBuilder {
        private TipoQuarto tipoQuarto;
        private int numeroNoites;
        private boolean cafeDaManha;
        private boolean vistaParaOMar;
        private boolean wifiPremium;
        private boolean lateCheckout;

        public HotelReservationBuilder(TipoQuarto tipoQuarto, int numeroNoites) {
            this.tipoQuarto = tipoQuarto;
            this.numeroNoites = numeroNoites;
        }

        public HotelReservationBuilder incluirCafeDaManha() {
            this.cafeDaManha = true;
            return this;
        }

        public HotelReservationBuilder incluirVistaParaOMar() {
            this.vistaParaOMar = true;
            return this;
        }

        public HotelReservationBuilder incluirWifiPremium() {
            this.wifiPremium = true;
            return this;
        }

        public HotelReservationBuilder incluirLateCheckout() {
            this.lateCheckout = true;
            return this;
        }

        public HotelReservation build() {
            return new HotelReservation(this);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        HotelReservation pacoteSimples = new HotelReservation.HotelReservationBuilder(TipoQuarto.STANDARD, 2)
                .incluirCafeDaManha()
                .build();

        HotelReservation pacoteLuxo = new HotelReservation.HotelReservationBuilder(TipoQuarto.LUXO, 5)
                .incluirCafeDaManha()
                .incluirVistaParaOMar()
                .incluirWifiPremium()
                .incluirLateCheckout()
                .build();

        System.out.println(pacoteSimples);
        System.out.println("-----------------------");
        System.out.println(pacoteLuxo);
    }
}
