let playerOne = true;
let celda = document.getElementsByClassName('celda');

for (i=0; i < celda.length; i++){
    celda[i].addEventListener('click',gameStart);
}

function gameStart(evento) {
    let valorCelda = evento.target.innerHTML;
    if(!valorCelda.length){
        evento.target.innerHTML = playerOne ? 'X' : 'O';
        playerOne = !playerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);

        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);

        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}

function checkLine(celda1, celda2, celda3) {
    if(
        celda[celda1].innerHTML.length &&
        celda[celda1].innerHTML == celda[celda2].innerHTML &&
        celda[celda2].innerHTML == celda[celda3].innerHTML
    ){
        showWinner(celda[celda1].innerHTML);
    }
}

function showWinner(player){
    document.querySelector('#resultado').innerHTML = player + ' Ganador!';
}