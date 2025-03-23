//Sistema de Notificações
//Como um administrador de um sistema de mensagens,
//eu quero enviar notificações para os usuários,
//para que eles possam receber alertas via e - mail ou SMS.
//Requisitos:
//● Deve haver uma classe Notification com um método send(message: string): void.
//● Deve ser possível criar notificações do tipo EmailNotification e SMSNotification.
//● Utilize Factory Method para instanciar o tipo correto de notificação.

abstract class MessageNotificationType {
    private unformatedAddress: string;

    constructor(unformatedAddress: string) {
        this.unformatedAddress = unformatedAddress;
    }

    abstract send(message: string): string;
}

abstract class MessageNotification { // Notification is already in use by a default typescript interface
    public abstract factoryMethod(): MessageNotificationType;

    send(message: string){
        let mnt = this.factoryMethod();
        console.log(`sending message: ${message}`);
        mnt.send(message);
    }
}

class MessageNotificationTypeSMS extends MessageNotificationType {
    private sms: number;
    
    constructor(sms: number) {
        super(sms.toString());
        this.sms = sms;
    }

    send(message: string): string {
        let text: string = `sending message:\n${message}\nusing SMS to: ${this.sms}`;
        console.log(text);
        return text;
    }
} 

class MessageNotificationSMS extends MessageNotification {
    private sms: string

    constructor(sms: string) {
        super();
        this.sms = sms;
    }

    factoryMethod(): MessageNotificationType {
        let smsFormated: string = this.sms
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll("+", "")
            .replaceAll("-", "")
            .replaceAll(" ", "");
        return new MessageNotificationTypeSMS(Number(smsFormated));
    }
}

class MessageNotificationTypeEmail extends MessageNotificationType {
    private email: string;
    
    constructor(email: string) {
        super(email);
        this.email = email;
    }

    send(message: string): string {
        let text: string = `sending message:\n${message}\nusing Email to: ${this.email}`;
        console.log(text);
        return text;
    }
}

class MessageNotificationEmail extends MessageNotification {  
    private email: string

    constructor(email: string) {
        super();
        this.email = email;
    }
    
    factoryMethod(): MessageNotificationType {
        return new MessageNotificationTypeEmail(this.email);
    }
}

enum MessageNotificationTypeEnum {
    sms,
    email
}

class MessageNotificationFactory {
    generate(type: MessageNotificationTypeEnum, addr: string): MessageNotification{
        let notification: MessageNotification;
        
        switch (type) {
            case 0:
                notification = new MessageNotificationSMS(addr);    
                break;
            case 1:
                notification = new MessageNotificationEmail(addr);    
                break;
            default:
                throw new Error("Tipo de mensagem invalido!");
        }

        return notification;
    }
}


const email = new MessageNotificationFactory().generate(MessageNotificationTypeEnum.email, "email@email.com");
const sms = new MessageNotificationFactory().generate(MessageNotificationTypeEnum.sms, "+55 (48) 9 9999-9999")

email.send("TESTE");
sms.send("TESTE");