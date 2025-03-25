// Exercícios
// Plataforma de Pagamentos
// Como um cliente de uma plataforma de e-commerce,
// eu quero poder pagar minhas compras com diferentes métodos de pagamento,
// para que eu possa escolher entre cartão de crédito, PayPal ou boleto bancário.
// Requisitos:
// ● Deve haver uma interface Payment com um método processPayment(amount: number):
// void.
// ● As implementações devem incluir CreditCardPayment, PayPalPayment e BoletoPayment.
// ● O sistema deve utilizar o Factory Method para criar a instância correta do método de
// pagamento.

interface Payment{
    processPayment(amount: number): void;
}

class CreditCardPayment implements Payment{
    processPayment(amount: number): void{
        console.log(`Process Credit Card ${amount}`);
    }
} 

class PayPalPayment implements Payment{
    processPayment(amount: number): void{
        console.log(`Process Paypal ${amount}`);
    }
}

class BoletoPayment implements Payment{
    processPayment(amount: number): void{
        console.log(`Process Boleto ${amount}`);
    }
}

class PaymentFactory{
    factoryMethod(paymentType: number): Payment{
        let pay: Payment;
        switch (paymentType){
            case 0:
                pay = new CreditCardPayment();
                break;
            case 1:
                pay = new PayPalPayment();
                break;
            case 2: 
                pay = new BoletoPayment();
                break;
            default: 
                throw new Error("Invalido");
                break;
        }
        return pay;
    }
}


let boleto: Payment = new PaymentFactory().factoryMethod(2);
boleto.processPayment(200);
boleto.processPayment(300)