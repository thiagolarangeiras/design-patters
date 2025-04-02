export class AndroidButton {
    render(): void {
        console.log("Renderizando um botão estilo Android");
    }
}

export class iOSButton {
    render(): void {
        console.log("Renderizando um botão estilo iOS");
    }
}

export class AndroidTextBox {
    render(): void {
        console.log("Renderizando uma caixa de texto estilo Android");
    }
}

export class iOSTextBox {
    render(): void {
        console.log("Renderizando uma caixa de texto estilo iOS");
    }
}

class Application {
    private button: any;
    private textBox: any;

    constructor(os: string) {
        if (os === "Android") {
            this.button = new AndroidButton();
            this.textBox = new AndroidTextBox();
        } else if (os === "iOS") {
            this.button = new iOSButton();
            this.textBox = new iOSTextBox();
        } else {
            throw new Error("Sistema operacional não suportado!");
        }
    }

    renderUI(): void {
        this.button.render();
        this.textBox.render();
    }
}

const userOS = "iOS";
const app = new Application(userOS);

app.renderUI();