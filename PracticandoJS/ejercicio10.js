// crear las variables del formulario y agregar al div del formulario
const divFormulario = document.createElement("div");
const tituloFormulario = document.createElement("h2");
const formularioGitHub = document.createElement("Form");
const lblUsuario = document.createElement("label");
const txtUsuario = document.createElement("input");
const btnBuscar = document.createElement("button");
const divResultado = document.createElement("div");

tituloFormulario.textContent = "Buscar usuario de GitHub ^.^";

lblUsuario.textContent = "Usuario de GitHub";

txtUsuario.type = "text";
txtUsuario.id = "txtUsuario";

btnBuscar.type = "submit";
btnBuscar.textContent = "Buscar usaurio";

formularioGitHub.append(lblUsuario);
formularioGitHub.append(txtUsuario);
formularioGitHub.append(btnBuscar);

divFormulario.append(tituloFormulario);
divFormulario.append(formularioGitHub);
divFormulario.append(divResultado);

// función para mostrar mensajes informativos o de error
function mostrarMensaje(texto, esError){
	const mensaje = document.createElement("p");
	mensaje.textContent = texto;

	if(esError){
		mensaje.style.color = "red";
	}

	divResultado.textContent = "";
	divResultado.append(mensaje);
}

// función para crear mensaje de etiqueta : valor
function linea(etiqueta, valor) {
	const linea = document.createElement("p");
	linea.textContent = etiqueta + " : " + valor;
	return linea;
}

// funcion para mostrar al usuario con html
function mostrarUsuario(datos){
	const tarjetaUsuario = document.createElement("div");
	const imgPerfil = document.createElement("img");
	const parrafoEnlace = document.createElement("p");
	const enlace = document.createElement("a");

	// fotografia
	imgPerfil.src = datos.avatar_url;
	imgPerfil.alt = "Imagen de "+ datos.login;
	imgPerfil.width = 120;

	// verificar si tiene nombre o no el perfil de git
	let nombreReal = "No disponible"
	if(datos.name !== null){
		nombreReal = datos.name;
	}

	// crear el enlace a su perfil
	enlace.href = datos.html_url;
	enlace.textContent = datos.html_url;
	parrafoEnlace.append("Perfil: ");
	parrafoEnlace.append(enlace);

	// agregar los elementos a la tarjeta
	tarjetaUsuario.append(imgPerfil);
	tarjetaUsuario.append(linea("Nombre del usario", datos.login));
	tarjetaUsuario.append(linea("Nombre real", nombreReal));
	tarjetaUsuario.append(linea("Repositorios publicos", datos.public_repos));
	tarjetaUsuario.append(linea("Seguidores", datos.followers));
	tarjetaUsuario.append(linea("Siguiendo", datos.following));
	tarjetaUsuario.append(parrafoEnlace);

	divResultado.textContent = "";
	divResultado.append(tarjetaUsuario);
}

// funcion para utilizar la api de github para hacer la peticion
async function buscarUsuario(e){
	// esto evita que el navegador recargue la pagina al enviar el forms
	e.preventDefault();

	const usuario = txtUsuario.value.trim();

	if(usuario === ""){
		mostrarMensaje("Escribe un nombre de usuario", true);
		return;
	}

	mostrarMensaje("Buscando a " + usuario + "...", false);

	try{
		const respuesta = await fetch("https://api.github.com/users/" + encodeURIComponent(usuario));

		if(respuesta.status === 404){
			mostrarMensaje("El usuario no existe en GitHub", true);
			return;
		}

		if(respuesta.status === 403){
			mostrarMensaje("GitHub rechazo la peticion", true);
			return;
		}

		if(!respuesta.ok){
			mostrarMensaje("El servidor respondio con un error", true);
			return;
		}

		const datos = await respuesta.json();
		mostrarUsuario(datos);
	} catch (error){
		mostrarMensaje("No se pudo completar la petición", true);
	}
}

// hacer que el boton ocupe la funcion de buscar usuario
formularioGitHub.addEventListener("submit", buscarUsuario);


document.body.append(divFormulario);