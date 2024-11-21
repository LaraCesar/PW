//Inicializa o tabuleiro como um array vazio.
const board = [];

//Obtém o elemento HTML onde o tabuleiro do jogo será exibido
const gameBoard = document.getElementById('gameBoard');

//Define o número de linhas e colunas do tabuleiro.
const rows = 3;
const cols = 3;

//Define qual jogador começa o jogo. 'X' será o primeiro
let currentPlayer = 'X';

//Função para iniciar ou reiniciar o jogo.
function startGame() {
    //Limpa o conteúdo do tabuleiro no HTML para um novo jogo.
    gameBoard.innerHTML = "";
    //Reinicia o jogador para'X'.
    currentPlayer = "X";
    //Preenche o tabuleiro com células vazias e adiciona elementos HTML para cada célula.
    for (let i=0;i<rows;i++) {
        board[1] = [];
        for (let j=0;j<cols;j++) {
            board[i][j] = '';
            const cell = document.createElement('div');
        }
    }
}