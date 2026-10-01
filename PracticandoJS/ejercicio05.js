// variable global de elementos
let cantidadElementos = 0;

// crear contenerdor-divisor para almacenar esa informacion
const contenedorEj5 = document.createElement("div");
document.body.appendChild(contenedorEj5);

// creacion de botones
const botonAgregar = document.createElement("button");
const botonEliminar = document.createElement("button");

// creacion de la lista
const listaNueva = document.createElement("ul");

// inserición de la lista
contenedorEj5.appendChild(listaNueva);

// funcion de agregar 
function botonAgregar(){
	cantidadElementos++;
	const elementoNuevo = document.createElement("li");
	elementoNuevo.textContent = "Elemento "+cantidadElementos;
	listaNueva.appendChild(elementoNuevo);
	aviso.textContent = "";
}

// accion del boton de agregar
contenedorEj5.appendChild(botonAgregar);
botonAgregar.textContent = "Agregar elemento";
botonAgregar.addEventListener("click", botonAgregar);

const aviso = document.createElement("p");
// funcion de eliminar
function botonEliminar(){
	if (cantidadElementos===0){
		aviso.textContent = "La lista está vacía. No hay elementos para eliminar.";
		contenedorEj5.appendChild(aviso);
	} else {
		listaNueva.lastElementChild.remove();
		cantidadElementos--;
	}
}

// accion del boton de eliminar
contenedorEj5.appendChild(botonEliminar);
botonEliminar.textContent = "Eliminar último elemento";
botonEliminar.addEventListener("click", botonEliminar);