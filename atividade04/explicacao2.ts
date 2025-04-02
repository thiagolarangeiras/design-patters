interface Button {
    render(): void;
}

class AndroidButton implements Button {
    render(): void {
        console.log("Renderizando um botão estilo Android");
    }
}

class iOSButton implements Button {
    render(): void {
        console.log("Renderizando um botão estilo iOS");
    }
}

interface TextBox {
    render(): void;
}

class AndroidTextBox implements TextBox {
    render(): void {
        console.log("Renderizando uma caixa de texto estilo Android");
    }
}

class iOSTextBox implements TextBox {
    render(): void {
        console.log("Renderizando uma caixa de texto estilo iOS");
    }
}

interface GUIFactory {
    criarButton(): Button;
    criarTextBox(): TextBox;
}

class AndroidGUIFactory implements GUIFactory {
    criarButton(): Button {
        return new AndroidButton();
    }

    criarTextBox(): TextBox {
        return new AndroidTextBox();
    }
}

class IosGUIFactory implements GUIFactory {
    criarButton(): Button {
        return new iOSButton();
    }

    criarTextBox(): TextBox {
        return new iOSTextBox();
    }
}

class Application {
    private factory: GUIFactory;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    renderUI(): void {
        this.factory.criarButton().render();
        this.factory.criarTextBox().render();
    }
}

function getOs(): GUIFactory {
    const os = process.env.OS;
    if (os === "Android") {
        return new AndroidGUIFactory();
    }

    if (os === "iOS") {
        return new IosGUIFactory();
    }

    throw new Error("OS não suportado")
}

const app = new Application(getOs());

app.renderUI();