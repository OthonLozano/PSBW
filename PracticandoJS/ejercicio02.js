// Se crea una variable que selecciona el titulo
const tituloModificar = document.querySelector("h1");

// Modifica el contenido del titulo
tituloModificar.textContent = "UNIVERSO (modificación)";

// Se modifica el id del titulo
tituloModificar.id = "id-titulo";

// Seleccionar los parrafos existentes en el documento.
const parrafosModificar = document.querySelectorAll("p");
// Nota: al seleccionar todo se vuelve como un arreglo, entonces se debe de recorrer 
// con un for para poder nombrar las clases
for (let i = 0; i < parrafosModificar.length; i++) {
	parrafosModificar[i].classList.add("class-parrafo");
}

// Modificar algunos elementos de diseño del documento.
tituloModificar.style.textAlign = "center";
tituloModificar.style.backgroundColor = "lightyellow";
parrafosModificar[0].style.color = "blue";
parrafosModificar[1].style.fontStyle = "italic"
