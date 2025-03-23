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