// crear una seccion con los 3 botones
const panelID6 = document.createElement("section");
const tituloPanel = document.createElement("h2");
const botonMostrarOcultar = document.createElement("button");
const botonCambiarMensaje = document.createElement("button");
const botonCambiarColor = document.createElement("button");


tituloPanel.textContent = "Panel interactivo";
botonMostrarOcultar.textContent = "Mostrar / Ocultar texto";
botonCambiarMensaje.textContent = "Cambiar mensaje";
botonCambiarColor.textContent = "Cambiar color";

panelID6.appendChild(tituloPanel);
panelID6.appendChild(botonMostrarOcultar);
panelID6.appendChild(botonCambiarMensaje);
panelID6.appendChild(botonCambiarColor);


// Seleecionar los elementos que se modificarán
const tituloSelec2 = document.querySelector("h1"); // cambiar color
const parrafoSelec2 = document.querySelector("p"); // ocultar
const subtituloSelec2 = document.querySelector("h2"); // cambiar texto
const zonaDiv = document.querySelector("div");

// funcion para cambiar mensaje
function cambiarMensaje(){
	subtituloSelec2.textContent = "SISTEMA SOLAR";
}

// funcion para cambiar color 
function cambiarColor(){
	tituloSelec2.style.backgroundColor= "lightgreen";
}

// funcion para ocultar parrafo
function alternarParrafo(){
	if(parrafoSelec2.style.display === "none"){
		parrafoSelec2.style.display = "";
	} else {
		parrafoSelec2.style.display = "none";
	}
}

botonCambiarColor.addEventListener("click", cambiarColor);
botonCambiarMensaje.addEventListener("click", cambiarMensaje);
botonMostrarOcultar.addEventListener("click", alternarParrafo);

// funciones para poder cambiar el color con el mouse sin hacer click
function resaltarZona(e) {
	e.target.style.backgroundColor = "gold";
}

function restaurarZona(e){
	e.target.style.backgroundColor = "";
}

zonaDiv.addEventListener("mouseenter", resaltarZona);
zonaDiv.addEventListener("mouseleave", restaurarZona);

document.body.appendChild(panelID6);
