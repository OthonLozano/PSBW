// Seleccionar los elementos
const tituloSelec = document.querySelector("h1");
const subtituloSelec = document.querySelector("h2");
const parrafosSelec = document.querySelectorAll("p");
const listaSelec = document.querySelector("ul");
const divSelec = document.querySelector("div");

// crear un div para que no se muevan los botones
const divBotones = document.createElement("div");
document.body.appendChild(divBotones);

// funciones
// invierte el orden
function invertirOrden(){
	document.body.appendChild(divSelec);
	document.body.appendChild(listaSelec);
	document.body.appendChild(parrafosSelec[1]);
	document.body.appendChild(parrafosSelec[0]);
	document.body.appendChild(subtituloSelec);
	document.body.appendChild(tituloSelec);
	document.body.appendChild(divBotones);
}

// revierte a un inicio 
function revertirOrden(){
	document.body.appendChild(tituloSelec);
	document.body.appendChild(subtituloSelec);
	document.body.appendChild(parrafosSelec[0]);
	document.body.appendChild(parrafosSelec[1]);
	document.body.appendChild(listaSelec);
	document.body.appendChild(divSelec);
	document.body.appendChild(divBotones);
}


// boton de invertir orden
const botonInvertir = document.createElement("button");
botonInvertir.textContent = "Reorganizar página";
botonInvertir.addEventListener("click", invertirOrden);

// boton de revertir 
const botonRevertir = document.createElement("button");
botonRevertir.textContent = "Restaurar orden";
botonRevertir.addEventListener("click", revertirOrden);

// agregar al documento los botones
divBotones.appendChild(botonInvertir);
divBotones.appendChild(botonRevertir);