// Este ejercicio es una versión extendida del ejercicio numero 7
const CLAVE = "tecnologiaDemo";

// estado inicial y copia para poder volver a él
let arregloTecnologiasEj09 = [
	{nombre: "HTML 5", descripcion: "Define la estructura básica y el contenido de las páginas web mediante el uso de etiquetas", tipo: "Lenguaje de marcado"},
	{nombre: "CSS 3", descripcion: "Se encarga del diseño visual, colores, fuentes y la disposición (layout) de los elementos en la página", tipo: "Lenguaje de hojas de estilo"},
];
let tecnologias = arregloTecnologiasEj09.slice();

// al cargar: consultar si hay algo guardado
const guardado = localStorage.getItem(CLAVE);
if(guardado !== null){
	tecnologias = JSON.parse(guardado);
}

// función que dibujara la tarjeta de cada una de las tecnologias
function dibujarTarjeta(tecnologia){
	const tarjeta = document.createElement("div");
	const nombreTec = document.createElement("h2");
	const descripcionTec = document.createElement("p");
	const tipoTec = document.createElement("p");

	nombreTec.textContent = tecnologia.nombre;
	descripcionTec.textContent = tecnologia.descripcion;
	tipoTec.textContent = tecnologia.tipo;

	tarjeta.append(nombreTec);
	tarjeta.append(descripcionTec);
	tarjeta.append(tipoTec);

	tarjeta.style.border = "2px solid darkgreen";
  	tarjeta.style.margin = "12px";
  	tarjeta.style.padding = "10px";

  	return tarjeta;
}

// contenedor de las tarjetas
const tarjetasTec = document.createElement("div");
for(let i = 0; i < tecnologias.length; i++){
    tarjetasTec.append(dibujarTarjeta(tecnologias[i]));
}

// hacer el formulario con JS
// crear los elementos
const formulario = document.createElement("form");
const labelNombre = document.createElement("label");
const inputNombre = document.createElement("input");
const labelDescripcion = document.createElement("label");
const inputDescripcion = document.createElement("input");
const labelTipo = document.createElement("label");
const inputTipo = document.createElement("input");
const botonRegistrar = document.createElement("button");
const botonEliminar = document.createElement("button");
const mensajeForm = document.createElement("p");

// asignar el texto que aparecera
labelNombre.textContent = "Nombre";
inputNombre.type = "text";
inputNombre.style.display = "block"

labelDescripcion.textContent = "Descripcion";
inputDescripcion.type = "text";
inputDescripcion.style.display = "block"

labelTipo.textContent = "Tipo";
inputTipo.type = "text";
inputTipo.style.display = "block"

botonRegistrar.type = "submit";
botonRegistrar.textContent = "Agregar tecnologia";
botonEliminar.type = "button";
botonEliminar.textContent = "Eliminar datos";
mensajeForm.style.color = "red";

// agregar al formulario
formulario.append(labelNombre);
formulario.append(inputNombre);
formulario.append(labelDescripcion);
formulario.append(inputDescripcion);
formulario.append(labelTipo);
formulario.append(inputTipo);
formulario.append(botonRegistrar);
formulario.append(botonEliminar);

// funcion que ayuda registrar las tecnologias
function registrarTecnologia(e){
	e.preventDefault();

	const nombre = inputNombre.value.trim();
	const descripcion = inputDescripcion.value.trim();
	const tipo = inputTipo.value.trim();

	if (nombre === "" || descripcion === "" || tipo === ""){
		mensajeForm.textContent = "Debe llenar todos los elementos del formulario";
		return;
	}

	const tecnologiaNueva = { nombre: nombre, descripcion: descripcion, tipo: tipo};
	tecnologias.push(tecnologiaNueva);
	localStorage.setItem(CLAVE, JSON.stringify(tecnologias))
	tarjetasTec.append(dibujarTarjeta(tecnologiaNueva));

	mensajeForm.textContent = "";
	formulario.reset();
}

// funcion que ayuda a borrar los datos
function borrarDatos() {
    localStorage.removeItem(CLAVE);
    tecnologias = arregloTecnologiasEj09.slice();
    tarjetasTec.innerHTML = ""; // Limpia las tarjetas actuales en pantalla
    for(let i = 0; i < tecnologias.length; i++){
        tarjetasTec.append(dibujarTarjeta(tecnologias[i]));
    }
}

formulario.addEventListener("submit", registrarTecnologia);
botonEliminar.addEventListener("click", borrarDatos);

// insertar todo en el body
document.body.appendChild(formulario);
document.body.appendChild(mensajeForm);
document.body.appendChild(tarjetasTec);