// ojo, voy a utilizar los elementos del ejercicio 7, por ende el ejercicio 8 depende
// del ejercicio 07

// div para agregar los elementos de busqueda junto con los elementos 
const divBusqueda = document.createElement("div");
const labelBusqueda = document.createElement("label");
const inputBusqueda = document.createElement("input");
const mensajeBusqueda = document.createElement("p");

labelBusqueda.textContent = "Buscar tecnologia";
inputBusqueda.type = "text";

// agregar elementos al div 
divBusqueda.append(labelBusqueda);
divBusqueda.append(inputBusqueda);
divBusqueda.append(mensajeBusqueda);

// funcion de busqueda y pintado
function buscarTecnologia(){
	const texto = inputBusqueda.value.trim().toLowerCase();
	const coincidencias = [];

	for(let i = 0; i < arregloTecnologiasEj07.length; i++){
		if(arregloTecnologiasEj07[i].nombre.toLowerCase().includes(texto)){
			coincidencias.push(arregloTecnologiasEj07[i]);
		}	
	}

	tarjetasTec.textContent = "";
	for(let i = 0; i < coincidencias.length; i++){
		tarjetasTec.append(dibujarTarjeta(coincidencias[i]));
	}
	if(coincidencias.length === 0){
		mensajeBusqueda.textContent = "No hay tecnologias que coincidan con la busqueda";
	} else {
		mensajeBusqueda.textContent = "";
	}
}

inputBusqueda.addEventListener("input", buscarTecnologia);

// insertar al documento
document.body.append(divBusqueda);