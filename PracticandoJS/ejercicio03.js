// Creacion del arreglo de objetos
const arregloTecnologias = [
	{nombre: "HTML 5", descripcion: "Define la estructura básica y el contenido de las páginas web mediante el uso de etiquetas", tipo: "Lenguaje de marcado"},
	{nombre: "CSS 3", descripcion: "Se encarga del diseño visual, colores, fuentes y la disposición (layout) de los elementos en la página", tipo: "Lenguaje de hojas de estilo"},
	{nombre: "JavaScript", descripcion: "Añade interactividad, animaciones y comportamiento dinámico a las interfaces de los sitios web", tipo: "Lenguaje de programación"},
	{nombre: "React", descripcion: "Facilita la creación de interfaces de usuario complejas y reactivas mediante componentes reutilizables", tipo: "Biblioteca de frontend"},
	{nombre: "Node.js", descripcion: "Permite ejecutar código JavaScript en el lado del servidor para desarrollar aplicaciones web escalables (backend)", tipo: "Entorno de ejecución"}
];

// Creacion del contendedor general 
const contenedorGeneral = document.createElement("div");
document.body.appendChild(contenedorGeneral);

// Agregar dentro del contenedor general otros div
for (let i=0; i < arregloTecnologias.length; i++){
	const tarjeta = document.createElement("div");
	const nombre = document.createElement("h3");
	const descripcion = document.createElement("p");
	const tipo = document.createElement("p");

	nombre.textContent = arregloTecnologias[i].nombre;
	descripcion.textContent = arregloTecnologias[i].descripcion;
	tipo.textContent = "Tipo: " + arregloTecnologias[i].tipo;

	tarjeta.appendChild(nombre);
	tarjeta.appendChild(descripcion);
	tarjeta.appendChild(tipo);

	tarjeta.style.border = "2px solid darkgreen";
	tarjeta.style.margin = "12px";
	tarjeta.style.padding = "10px";

	contenedorGeneral.appendChild(tarjeta);
}