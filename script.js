// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Função para verificar o palpite
function checkGuess() {
    // Obtém o palpite do usuário
    const palpiteUsuario = parseInt(document.getElementById("guessInput").value);

    // Obtém o elemento de mensagem
    const mensagemElement = document.getElementById("message");

    // Verifica se o palpite está correto
    if (palpiteUsuario === numeroSecreto) {
        mensagemElement.innerHTML = "<strong>Parabéns! Você acertou!</strong>";
        mensagemElement.style.color = "#4CAF50"; // Cor verde para mensagem de acerto

        // Inicia a animação de fogos de artifício
        createFireworks();

        // Resetando o jogo após 3 segundos
        setTimeout(function () {
            // Resetar o número secreto
            numeroSecreto = Math.floor(Math.random() * 100) + 1;

            // Limpar o campo de input e mensagem
            document.getElementById("guessInput").value = "";
            mensagemElement.innerHTML = "";
        }, 3000); // Após 3 segundos (tempo da animação)
    } else {
        mensagemElement.innerHTML = `Tente novamente. O número correto é ${numeroSecreto > palpiteUsuario ? '<strong>MAIOR</strong>' : '<strong>MENOR</strong>'}.`;
        mensagemElement.style.color = "#FF0000"; // Cor vermelha para mensagem de erro

        // Apaga a mensagem depois de 5 segundos
        setTimeout(function () {
            mensagemElement.innerHTML = "";
        }, 5000);
    }
}

// Função para criar os fogos de artifício
function createFireworks() {
    const fireworksContainer = document.getElementById("fireworks");

    // Definir o número de partículas que formarão o efeito dos fogos de artifício
    const numParticles = 100;

    // Definir o ponto central para as explosões
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Posicionar as partículas de forma aleatória a partir do centro
        const angle = Math.random() * 360; // Angulação aleatória
        const distance = Math.random() * 200 + 100; // Distância aleatória das partículas
        const xPos = centerX + Math.cos(angle * Math.PI / 180) * distance;
        const yPos = centerY + Math.sin(angle * Math.PI / 180) * distance;

        particle.style.left = `${xPos}px`;
        particle.style.top = `${yPos}px`;

        // Definir animações de explosão e cor
        const size = Math.random() * 5 + 5; // Tamanho das partículas
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Adicionar a partícula ao contêiner
        fireworksContainer.appendChild(particle);

        // Remover a partícula após a animação
        setTimeout(() => {
            particle.remove();
        }, 1500); // A partícula dura 1.5 segundos

        // Adicionar efeito de cor aleatória para cada partícula
        const colors = ["#008EAD", "#B57E02", "#DD1657", "#6249D6"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;

        // Adicionar uma animação de expansão com cores
        particle.style.animation = `fireworkExplosion 1.5s ease-out forwards, particleColorChange 1.5s ease-out forwards`;
    }
}
