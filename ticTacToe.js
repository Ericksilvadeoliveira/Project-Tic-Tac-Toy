'use strict'

const todasCasas = Array.from(document.querySelectorAll('.casas'));
const playerDisplay = document.querySelector('.display-player');
const resultado = document.querySelector('#resultado');
const resetBtn = document.getElementById('reset');

let gameboard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const playerXwon = 'Player X Won!';
const playerOwon = 'Player O won!';
const tie = 'Tie';

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const isValidAction = (casa) => {
    if (casa.innerText === 'X' || casa.innerText === 'O') {
        return false;
    }

    return true;
}

const updateGameBoard = (index) => {
    gameboard[index] = currentPlayer;
}

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText  = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

const result = (type) => {
    switch(type){
        case playerOwon:
            resultado.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;
        
        case playerXwon:
            resultado.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;

        case tie:
            resultado.innerText = 'Tie';
    }
    resultado.classList.remove('hide');
};

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningPositions[i];
        const a = gameboard[winCondition[0]];
        const b = gameboard[winCondition[1]];
        const c = gameboard[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        result(currentPlayer === 'X' ? playerXwon : playerOwon);
        isGameActive = false;
        return;
    }

    if (!gameboard.includes('')) result(tie);
}

const userAction = (casa, index) => {
    if (isValidAction(casa) && isGameActive) {
        casa.innerText = currentPlayer;
        casa.classList.add(`Vezdo${currentPlayer}`);
        updateGameBoard(index);
        resultValidation();
        changePlayer();
    }
};

todasCasas.forEach((casa, index) => {
    casa.addEventListener('click', () => {
        userAction(casa, index)
    })
})

const resetGameBoard = () => {
    const gameboard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    resultado.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    todasCasas.forEach(casa => {
        casa.innerText = '';
        casa.classList.remove('playerX');
        casa.classList.remove('playerO');
    });
}

resetBtn.addEventListener('click', resetGameBoard);