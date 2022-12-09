const casas = [...document.querySelectorAll('.casas')];

const playerDisplay = document.querySelector('.display-player');

const resultado = document.querySelector('#resultado');

casas.forEach(item => {
    item.addEventListener('click', () => {
        item.innerHTML = 'x';
        console.log(casas)
    })
});

