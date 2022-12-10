'use strict'

const casas = document.querySelectorAll('.casas');

const todasCasas = Array.from(casas);

const playerDisplay = document.querySelector('.display-player');

const resultado = document.querySelector('#resultado');

todasCasas.push(' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x');
console.log(todasCasas);

function clickString (index) {
    index = todasCasas.indexOf(' ');
    if (index !== -1) {
        todasCasas[index] = 'ggiu'
    }
}

todasCasas.forEach(clickString);
console.log(todasCasas);