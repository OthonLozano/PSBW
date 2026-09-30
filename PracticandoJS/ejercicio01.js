// Crear los elementos que voy a ocupar
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h2");
const parrafo1 = document.createElement("p");
const parrafo2 = document.createElement("p");
const lista = document.createElement("ul");

// A ciertos elementos darles el contenido que deben de llevar (titulo, subtitulo, 2 parrafos)
titulo.textContent = "UNIVERSO";
subtitulo.textContent = "Sistema Solar";
parrafo1.textContent  = "El sistema solar es un sistema planetario formado por el Sol y todos los cuerpos celestes que giran a su alrededor debido a la fuerza de gravedad. En el centro se encuentra el Sol, una estrella que concentra más del 99 % de la masa total del sistema y proporciona la luz y el calor necesarios para la vida. Alrededor de esta estrella orbitan ocho planetas principales, además de satélites naturales como la Luna, planetas enanos, asteroides y cometas.";
parrafo2.textContent = "Los planetas se dividen en dos grandes grupos según su composición y cercanía al Sol. Los planetas interiores o rocosos —Mercurio, Venus, la Tierra y Marte— son los más cercanos al Sol, tienen un tamaño menor y poseen una superficie sólida. Los planetas exteriores —Júpiter, Saturno, Urano y Neptuno— son gigantes gaseosos o de hielo, están ubicados más allá del cinturón de asteroides, son de gran tamaño y cuentan con numerosos sistemas de anillos y lunas.";

// Agregar los elementos que deben de ir en el body
document.body.appendChild(titulo);
document.body.appendChild(subtitulo);
document.body.appendChild(parrafo1);
document.body.appendChild(parrafo2);
document.body.appendChild(lista);

// Se crea un arreglo con los planetas
const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

// Se itera por cada planeta y se crea un elemento de tipo li para colocarlo dentro de la lista 
for (let i = 0; i < planetas.length; i++) {
	const elemento = document.createElement("li");
	elemento.textContent = planetas[i];
	lista.appendChild(elemento);
}

