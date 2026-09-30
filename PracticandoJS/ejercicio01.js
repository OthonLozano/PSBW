// Crear los elementos que voy a ocupar
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h2");
const parrafo = document.createElement("p");
const lista = document.createElement("ol");

// A ciertos elementos darles el contenido que deben de llevar
titulo.textContent = "UNIVERSO";
subtitulo.textContent = "Sistema Solar";
parrafo.textContent  = "El Sistema Solar es un sistema planetario formado por el Sol y todos los cuerpos celestes que giran a su alrededor debido a la fuerza de gravedad";

// Agregar los elementos que deben de ir en el body
document.body.appendChild(titulo);
document.body.appendChild(subtitulo);
document.body.appendChild(parrafo);
document.body.appendChild(lista);

// Se crea un arreglo con los planetas
const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];

// Se itera por cada planeta y se crea un elemento de tipo li para colocarlo dentro de la lista 
for (let i = 0; i < planetas.length; i++) {
	const elemento = document.createElement("li");
	elemento.textContent = planetas[i];
	lista.appendChild(elemento);
}

