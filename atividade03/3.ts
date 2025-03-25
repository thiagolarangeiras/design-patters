// Exercícios
// Plataforma de Streaming
// Como um desenvolvedor de uma plataforma de streaming,
// eu quero que o sistema suporte diferentes tipos de mídia (áudio, vídeo e podcast),
// para que os usuários possam consumir conteúdos de diferentes formatos de forma
// padronizada.
// Requisitos:
// ● Deve haver uma interface Media com métodos play(): void e stop(): void.
// ● As implementações devem incluir AudioMedia, VideoMedia e PodcastMedia.
// ● O sistema deve utilizar Factory Method para criar dinamicamente a mídia correta com
// base no tipo recebido.
// ● Deve haver um tratamento de erro caso o tipo seja inválido

interface Media{
    play(): void;
    stop(): void;
}

class AudioMedia implements Media{
    play(): void{
        console.log("Play audio");
    }
    stop(): void{
        console.log("Stop audio");
    }
}

class VideoMedia implements Media{
    play(): void{
        console.log("Play video");
    }
    stop(): void{
        console.log("Stop video");
    }
}

class PodcastMedia implements Media{
    play(): void{
        console.log("Play podcast");
    }
    stop(): void{
        console.log("Stop podcast");
    }
}

class MediaFactory{
    static factoryMethod(type: number): Media{
        switch (type){
            case 0:
                return new AudioMedia();
            case 1:
                return new VideoMedia();
            case 2:
                return new PodcastMedia();
            default:
                throw new Error("Erro");
        }
    }
}

try{
    let video: Media = MediaFactory.factoryMethod(1);
    video.play();
    video.stop();

} catch (error){
    console.error(error.message);
}