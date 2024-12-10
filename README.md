# 🎯 Jogo de Adivinhação - O Mentalista 🧠

"O Mentalista" é um jogo simples onde você deve adivinhar um número secreto entre 1 e 100.

## 📋 Funcionalidades

- Número Aleatório: O jogo gera um número secreto entre 1 e 100 a cada nova rodada.
- Dicas Inteligentes: O jogador recebe mensagens indicando se o número secreto é "MAIOR" ou "MENOR" que o palpite.
- Feedback Visual:
  - Errou: Mensagem em vermelho informando se o número é maior ou menor.
  - Acertou: Mensagem em verde informando o sucesso, acompanhada por uma animação inspirada em atividade cerebral com cores vibrantes.
  - Reinício Automático: O jogo reinicia automaticamente após alguns segundos, incentivando novas tentativas.

## 🚀 Tecnologias Utilizadas

- HTML: Estrutura básica do jogo.
- CSS: Estilização da interface e criação das animações.
- JavaScript: Lógica do jogo, manipulação do DOM e controle da animação.

## 🎨 Layout
**Cores Utilizadas**:

As cores escolhidas refletem o tema de atividade cerebral:

- Azul: #008EAD
- Dourado: #B57E02
- Rosa: #DD1657
- Roxo: #6249D6

## 📄 Como Executar  

1. **Clone o repositório**:  

   ```bash
   git clone https://github.com/fernandadamsantos/jogo-adivinhacao.git

2. **Acesse a pasta do projeto**:  

   ```bash
   cd jogo-adivinhacao

3. **Abra o arquivo index.html no navegador**:
- Windows
    
    ```bash
    explorer.exe index.html

- MacOS     
  
    ```bash
    open index.html

 - Linux     
  
    ```bash
    xdg-open index.html

## 📂 Estrutura do Projeto
Abaixo está a estrutura de arquivos e pastas do projeto:
    
```plaintext
📂 jogo-adivinhacao
├── index.html          # Estrutura principal do jogo
├── style.css           # Estilos do projeto
├── script.js           # Lógica do jogo
├── README.md           # Documentação do projeto
└── assets              # Pasta com imagens utilizadas
    ├── background.jpg       # Imagem de fundo
    └── screenshot.png       # Imagem para demonstração
```
## 🎥 Funcionamento do Jogo

1. O Jogador digita um palpite
  - O campo de entrada aceita números entre 1 e 100.
2. Feedback Imediato:
  - Se o palpite estiver incorreto, o jogo exibirá uma mensagem em vermelho informando se o número correto é maior ou menor.
  - Se o palpite estiver correto:
    - Uma mensagem verde aparece: "Parabéns! Você acertou!"
    - Uma animação simulando atividade cerebral com partículas coloridas será exibida.
3. Reinício Automático:
  - Após alguns segundos, o número secreto é reiniciado, e o jogador pode tentar novamente.
  
## ✨ Demonstração
Se preferir, acesse uma versão online do projeto:

[Projeto](https://fernandadamsantos.github.io/jogo-adivinhacao/)

## 📖 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados:

- Manipulação do DOM com JavaScript.
- Uso de eventos e lógica condicional para gerenciar as interações do usuário.
- Criação de animações visuais utilizando CSS com partículas e transformações.

## 💡 Melhorias Futuras

Algumas ideias para expandir o jogo:

- Adicionar um contador de tentativas para desafiar o jogador.
- Incluir um cronômetro para medir o tempo gasto em cada rodada.
- Criar níveis de dificuldade, ajustando a faixa de números para cada nível.
- Implementar um sistema de placar para salvar os melhores tempos.

## 🖋️ Autor(a)  

Desenvolvido por: **Fernanda Adams dos Santos**  

- [GitHub](https://github.com/fernandadamsantos)  
- [LinkedIn](https://www.linkedin.com/in/fernandadamsantos/)
