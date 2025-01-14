const lista = document.querySelector(`#lista`);

const nuovoElemento = document.createElement(`li`);

nuovoElemento.textContent=`Tre`;

console.log(nuovoElemento);

lista.appendChild(nuovoElemento);