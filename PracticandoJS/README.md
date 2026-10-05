# PracticandoJS

Actividad "Practicando JavaScript" de Programación de Sistemas Basados en Web (PSBW).

---

## Ejercicio 1: Construyendo HTML desde JavaScript

**1. ¿Qué hace este ejercicio?**
Construye la página desde JavaScript. El `index.html` solo tiene la estructura mínima y carga el script, que crea un `<h1>`, un `<h2>`, dos `<p>` y una `<ul>` con los ocho planetas del sistema solar, y los inserta en el `body`. Esas etiquetas no están en el HTML estático: se agregan al DOM, la estructura viva de objetos en memoria que construye el navegador.

**2. ¿Qué conceptos utilicé?**
`createElement()`, `textContent`, `appendChild()`, `const`, arreglos y ciclo `for`.

**3. ¿Ya conocía estos conceptos?**
Ya habia utilizado `createElement()`, `textContent`, `const`, que son algunas que utilizamos en clase, por otro lado, lo que son los arreglos y el ciclo `for` son conceptos que ya tenia claros porque son similar a la estructura del lenguaje Java.

**4. ¿Tuve dificultades?**
- La página salía en blanco porque escribí `<script type="ejercicio01.js">`. `src` es la ruta del archivo y `type` es el tipo de script; el navegador no reconoció ese tipo y lo ignoró sin mostrar error.
- Usé `<ol>` en lugar de `<ul>`; lo corregí con un commit `fix`.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** Se me complico el como empezar a crear elementos HTML desde JS, ni por qué la página salía en blanco.
- **Qué pregunté:** una explicación paso a paso del DOM con un ejemplo de otros elementos, y por qué fallaba mi página (con una captura de DevTools).
- **Qué usé:** el patrón crear, dar contenido e insertar, y el ciclo `for` sobre un arreglo. El tema y los textos son míos.
- `document.createElement("h1")`: crea el elemento en memoria, todavía invisible.
- `textContent`: le asigna el texto.
- `padre.appendChild(hijo)`: lo inserta en el DOM; solo así aparece en pantalla.
- `for (let i = 0; i < planetas.length; i++)`: se repite `length` veces (`i` de 0 a 7) y crea un `<li>` por planeta.

---

## Ejercicio 2: Modificando elementos existentes

**1. ¿Qué hace este ejercicio?**
Modifica lo creado en el ejercicio 1 sin tocar el HTML: cambia el texto del título, le asigna un `id`, agrega una clase a los dos párrafos y cambia cuatro estilos (alineación y fondo del título, color de un párrafo y cursiva en el otro).

**2. ¿Qué conceptos utilicé?**
`querySelector`, `querySelectorAll`, `textContent`, `id`, `classList`, `style`, ciclo `for` y orden de carga de los scripts.

**3. ¿Ya conocía estos conceptos?**
Si, los de `querySelector`, `querySelectorAll`, `textContent` son algunos que vimos en clase y por otro lado algunas cosas de CSS basico que sabía se podían modificar desde JS utilizando ciertos criterios que pide utilizar.

**4. ¿Tuve dificultades?**
- En una práctica busqué un `<h3>` con `querySelector("h1")`: devolvió `null` y apareció un `TypeError`. El selector debe coincidir con lo que existe en el DOM en ese momento.
- Escribí `textAling` en lugar de `textAlign`: JavaScript no mostró error, simplemente no hubo efecto.
- `ejercicio02.js` debe cargarse después de `ejercicio01.js`, porque busca elementos que ese archivo crea.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** modificar elementos ya creados y entender por qué fallaba mi código de práctica.
- **Qué pregunté:** cómo seleccionar y modificar elementos (con un ejemplo distinto) y si mi código estaba bien.
- **Qué usé:** la selección y el ciclo para la clase. Algunos valores de estilo (por ejemplo, alineación centrada y fondo claro) se parecen a los de un ejemplo de la IA; el resto es mío.
- `querySelector("h1")`: devuelve la primera coincidencia (o `null` si no hay).
- `querySelectorAll("p")`: devuelve un arreglo de coincidencias (`NodeList`); lo recorro con `for` porque son dos párrafos.
- `classList.add("class-parrafo")`: agrega una clase sin borrar las existentes; por sí sola no cambia el aspecto sin una regla CSS.
- `style.textAlign = "center"`: aplica un estilo directo al elemento; las propiedades van en *camelCase* y los valores como texto.

---

## Ejercicio 3: Crear una colección de elementos desde datos

**1. ¿Qué hace este ejercicio?**
Define un arreglo con cinco objetos `{nombre, descripcion, tipo}` (tecnologías web). Un `for` genera por cada objeto un `div` con un `<h3>` y dos `<p>`, con borde y espacio alrededor, y los inserta en un contenedor general.

**2. ¿Qué conceptos utilicé?**
Arreglo de objetos, notación de punto, ciclo `for`, elementos anidados y `style`.

**3. ¿Ya conocía estos conceptos?**
Pues solo la parte del for y como hacer un arreglo básico, pero el arreglo de objetos, fue "nuevo" para mí, lo relacione mucho a python con los diccionarios.

**4. ¿Tuve dificultades?**
Creía que, si los elementos de la tarjeta se crearan fuera del ciclo, solo se vería el primer objeto. En realidad se reutilizarían los mismos elementos: el texto se sobrescribiría y, por la Regla de Traslado en el DOM, `appendChild` movería la misma tarjeta en lugar de duplicarla. Se vería una sola tarjeta con los datos del último objeto. Por eso se crean dentro del ciclo.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** generar varias tarjetas a partir de datos.
- **Qué pregunté:** cómo usar un arreglo de objetos y elementos anidados, con un ejemplo de otro tema.
- **Qué usé:** la estructura de la tarjeta y los estilos (`2px solid darkgreen`, `12px` y `10px`) de un ejemplo con instrumentos musicales, y la sugerencia de anteponer "Tipo:". Los datos y las descripciones son míos.
- `arregloTecnologias[i].nombre`: `[i]` es la posición, `arregloTecnologias[i]` es el objeto en esa posición y `.nombre` es su campo.
- `tarjeta.appendChild(nombre)` anida el contenido; `contenedorGeneral.appendChild(tarjeta)` inserta la tarjeta completa.
- `margin` separa las tarjetas por fuera del borde; `padding` separa el contenido del borde por dentro.

---

## Ejercicio 4: El DOM también se puede reorganizar

**1. ¿Qué hace este ejercicio?**
"Reorganizar página" invierte el orden de los elementos (contenedor de tarjetas, lista, párrafos, subtítulo y título) y "Restaurar orden" lo regresa al original. No se crean nodos nuevos: se mueven los existentes.

**2. ¿Qué conceptos utilicé?**
Regla de Traslado con `appendChild`, funciones, evento `click` con `addEventListener` y `querySelector`.

**3. ¿Ya conocía estos conceptos?**
Si, ya que son conceptos que habiamos visto en clase.

**4. ¿Tuve dificultades?**
- Mis botones se movían junto con el contenido: los insertaba en el contenedor de tarjetas en lugar de en su propio `div`.
- Ya separados, cambiaban de lugar porque cada nodo movido va al final del `body`. Lo resolví volviendo a hacer `appendChild(divBotones)` al final de cada función. Otra opción vista en clase es `prepend`.
- `querySelectorAll("p")` incluye también los párrafos de las tarjetas; funciona porque mis dos párrafos originales aparecen primero.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** mover nodos existentes y mantener los botones en su lugar.
- **Qué pregunté:** cómo mover nodos (con un ejemplo distinto) y por qué se movían mis botones.
- **Qué usé:** el esquema de funciones que reordenan con `appendChild` y botones con `addEventListener`, de un ejemplo de la IA. La IA me señaló las dos causas del problema; la solución final la elegí yo.
- `document.body.appendChild(nodo)` con un nodo que ya existe: lo traslada al final del `body` en vez de duplicarlo.
- `boton.addEventListener("click", funcion)`: `boton` es el elemento que escucha, `"click"` es el evento y `funcion` es el código que se ejecuta al hacer clic.
- `funcion` va sin paréntesis porque se pasa como referencia; con paréntesis se ejecutaría de inmediato al cargar la página.

---

## Ejercicio 5: Agregar y eliminar elementos

**1. ¿Qué hace este ejercicio?**
"Agregar elemento" crea un `<li>` numerado (Elemento 1, Elemento 2...) en una lista. "Eliminar último elemento" quita el último. Si la lista está vacía, muestra un aviso en la página y no genera errores.

**2. ¿Qué conceptos utilicé?**
`let` (permite reasignación), `++` y `--`, concatenación, `if / else`, `lastElementChild`, `remove()` y evento `click`.

**3. ¿Ya conocía estos conceptos?**
Sí, ya que son fundamentos de programación.

**4. ¿Tuve dificultades?**
- El aviso se creaba de nuevo en cada clic y se acumulaba. Lo corregí creando el `<p>` una sola vez y cambiando solo su texto, que se vacía al agregar un elemento. El criterio: se crea un elemento dentro de una función cuando cada acción necesita uno nuevo (como las tarjetas) y una sola vez cuando se necesita exactamente uno.



**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** agregar y eliminar elementos numerados sin errores al vaciar la lista.
- **Qué pregunté:** cómo llevar una cuenta que persista entre clics y cómo eliminar el último elemento; luego pedí revisión de mi código.
- **Qué usé:** la idea de una variable fuera de la función, de un ejemplo de contador de clics (la mía cuenta elementos), y la revisión que señaló el nombre del botón y el aviso duplicado.
- `let cantidadElementos = 0` fuera de la función: conserva su valor entre clics; dentro se reiniciaría en cada clic.
- `cantidadElementos++` y `--`: mantienen el número igual a la cantidad real; si agrego 3, elimino 1 y agrego otro, el nuevo es "Elemento 3".
- `listaNueva.lastElementChild.remove()`: elimina el último `<li>`; `lastElementChild` vale `null` si no hay ninguno.
- `if (cantidadElementos === 0)`: evita aplicar `remove()` sobre `null`, que causaría un `TypeError`.

> **BORRADOR (elimina esta nota al entregar).** Pega estas secciones al final de tu `README.md`, después del ejercicio 5. Completa los bloques **[COMPLETA]**, confirma los **[VERIFICA]** con tu código final y reescribe con tus palabras lo que no suene natural en ti.

---

## Ejercicio 6: Eventos e interacción

**1. ¿Qué hace este ejercicio?**
Crea con JavaScript una sección "Panel interactivo" con tres botones, cada uno con una acción distinta: uno oculta y muestra un párrafo, otro cambia el texto del subtítulo y otro cambia el color de fondo del título. Además, un elemento responde a un evento distinto de `click`.

**2. ¿Qué conceptos utilicé?**
`createElement`, `addEventListener`, evento `click` y el evento adicional `mouseenter` y `mouseleave`, `style` (`display` y `backgroundColor`), `textContent`, `querySelector`, funciones y `if / else`.

**3. ¿Ya conocía estos conceptos?**
Algunas cosas como la parte de la selección de elementos con `querySelector`, el contenido de las etiquetas, la lógica de como funciona un `if / else`.

**4. ¿Tuve dificultades?**
- Al probar un ejemplo en la misma página que otro apareció `Identifier 'panelD' has already been declared`. Dos scripts de una misma página comparten los nombres globales, por lo que cada `const` necesita un nombre único. Desde entonces uso sufijos como `Ej6`.


**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** crear un panel con botones que modifiquen la página y manejar otro tipo de evento.
- **Qué pregunté:** cómo funcionan los eventos y un ejemplo con otros elementos; después pedí revisar mi código.
- **Qué usé:** la estructura de un panel con tres botones, cada uno con su función (los nombres `cambiarMensaje` y `cambiarColor` vienen del ejemplo), y la idea de alternar mostrar y ocultar. Los elementos que modifica y los textos son míos.
- `boton.addEventListener("click", funcion)`: el botón escucha el evento `click` y ejecuta `funcion`; va sin paréntesis porque se pasa como referencia y no debe ejecutarse al cargar la página.
- `style.display = "none"` y `style.display = ""`: la primera oculta el elemento y la segunda quita el valor en línea, con lo que vuelve a verse. Se compara con `"none"` porque al inicio el valor en línea es `""`.
- `textContent` y `style.backgroundColor`: cambian el texto y el color de fondo de un elemento existente.

---

## Ejercicio 7: Formulario dinámico

**1. ¿Qué hace este ejercicio?**
Crea con JavaScript un formulario con nombre, descripción y tipo, y un botón "Agregar tecnología". Al enviarlo, comprueba que ningún campo esté vacío; si falta alguno, muestra un mensaje en la página. Si todo es válido, agrega la tecnología al arreglo y dibuja su tarjeta sin recargar la página. Por indicación de la docente, este ejercicio usa su propio arreglo y no depende del ejercicio 3.

**2. ¿Qué conceptos utilicé?**
Creación de elementos de formulario, evento `submit`, `preventDefault`, `value`, `trim`, operador `||`, `return`, `push`, `reset` y funciones con parámetro y valor de retorno.

**3. ¿Ya conocía estos conceptos?**
Sí, ya que fue una practica integradora donde se ponian en marcha los elementos que ya habiamos ocupado en los otros ejercicios.

**4. ¿Tuve dificultades?**
- Mi primera versión no tenía botón de envío. Con tres campos de texto y sin botón `submit`, el formulario no se puede enviar ni con Enter.
- Había creado el mensaje de error pero no lo había insertado en el `body`, por lo que nunca se veía. Un elemento creado solo aparece cuando se inserta en el DOM.
- Volví a declarar `const arregloTecnologias`, que ya existía en el ejercicio 3, y aparecía `SyntaxError`. Lo resolví dando un nombre distinto a mi arreglo.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** validar un formulario y agregar una tarjeta nueva sin recargar.
- **Qué pregunté:** cómo crear un formulario con JavaScript y validarlo, con un ejemplo de otro tema (libros); después pedí revisar mi código.
- **Qué usé:** la estructura del manejador de `submit` y de la función que crea una tarjeta (`dibujarTarjeta` equivale a la del ejemplo). Los datos, los textos y el formulario son míos.
- `e.preventDefault()`: cancela el envío normal del formulario, que recargaría la página y haría perder lo agregado.
- `campo.value.trim()`: obtiene el texto escrito sin espacios al inicio y al final, así un campo con solo espacios cuenta como vacío.
- `nombre === "" || descripcion === "" || tipo === ""`: es verdadero si al menos un campo está vacío.
- `arreglo.push(objeto)`: agrega la tecnología al final del arreglo, aunque este sea `const`, porque no se reasigna.
- `formulario.reset()`: vacía los campos después de agregar.

---

## Ejercicio 8: Buscar y filtrar información

**1. ¿Qué hace este ejercicio?**
Agrega un campo "Buscar tecnología". Mientras el usuario escribe, se muestran solo las tecnologías cuyo nombre contiene el texto escrito, sin distinguir mayúsculas. Si no hay coincidencias, aparece un mensaje; si el campo queda vacío, vuelven a verse todas. Depende del ejercicio 7, porque usa su arreglo, su contenedor de tarjetas y su función `dibujarTarjeta`.

**2. ¿Qué conceptos utilicé?**
Evento `input`, `value`, `trim`, `toLowerCase`, `includes`, ciclo `for`, arreglos y construcción de un arreglo nuevo con `push`, y reconstrucción de la interfaz con `textContent = ""`.

**3. ¿Ya conocía estos conceptos?**
La mayoría de los conceptos ya los conocía, solo que me fallo la lógica de como utilizar o actualizar el arreglo desde JS y como reconstruir la interfaz.

**4. ¿Tuve dificultades?**
- Pensé que `dibujarTarjeta` recibía un arreglo y mostraba las tarjetas. Recibe **un** objeto y **devuelve** una tarjeta, pero no la inserta; por eso tuve que vaciar el contenedor y, por cada coincidencia, insertar lo que devuelve.
- Asigné `label.text` en lugar de `label.textContent`, y la etiqueta quedó vacía; JavaScript no avisó porque simplemente creó una propiedad nueva.
- Al principio no entendía si debía leer el arreglo o el `div` del ejercicio 7. Debe leerse el arreglo, que contiene los datos; el `div` solo muestra el resultado.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** mostrar solo las tecnologías que coinciden con lo escrito.
- **Qué pregunté:** cómo filtrar mientras se escribe, con un ejemplo de otro tema (frutas), y cómo conectar el ejercicio 8 con los datos del 7.
- **Qué usé:** la estructura de la función de búsqueda (leer el texto, recorrer el arreglo, guardar coincidencias y volver a dibujar), que adapté a mis elementos. La corrección de dibujar con un ciclo vino de una revisión de mi código.
- `inputBusqueda.addEventListener("input", ...)`: ejecuta la búsqueda cada vez que cambia el contenido del campo, a diferencia de `change`, que espera a que el campo pierda el foco.
- `nombre.toLowerCase().includes(texto)`: pasa ambos textos a minúsculas y comprueba si el nombre contiene el fragmento escrito en cualquier posición. Con el campo vacío siempre es verdadero, por lo que se muestran todas.
- `coincidencias.push(...)`: construye un arreglo nuevo sin modificar el original.
- `contenedor.textContent = ""`: elimina todas las tarjetas anteriores antes de volver a dibujar.

---

## Ejercicio 9: Estado y LocalStorage

**1. ¿Qué hace este ejercicio?**
Guarda las tecnologías en `localStorage`. Al agregar una tecnología actualiza el arreglo, guarda todo el arreglo y dibuja la tarjeta. Al cargar la página consulta si hay datos guardados y, si los hay, los recupera y reconstruye las tarjetas. El botón "Borrar datos guardados" elimina lo almacenado y regresa a las tecnologías iniciales. Es una versión extendida del ejercicio 7 con su propio arreglo.

**2. ¿Qué conceptos utilicé?**
`localStorage` (`setItem`, `getItem`, `removeItem`), `JSON.stringify` y `JSON.parse`, `let` para poder reasignar el arreglo, `slice` para conservar una copia del estado inicial y comprobación de `null`.

**3. ¿Ya conocía estos conceptos?**
No, estos conociminetos si fueron nuevo para mi.

**4. ¿Tuve dificultades?**
- `localStorage` solo guarda texto, por lo que un arreglo de objetos se convierte en `"[object Object]"` si no se usa `JSON`.

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** conservar las tecnologías al recargar y poder borrarlas.
- **Qué pregunté:** cómo funciona `localStorage` y un ejemplo con otro tema (tareas).
- **Qué usé:** el esquema del ejemplo: una clave constante, una copia del estado inicial con `slice`, la lectura al cargar con comprobación de `null`, el guardado al agregar y el borrado que restaura el estado inicial. Lo adapté a mis tecnologías y al formulario del ejercicio 7.
- `localStorage.getItem(CLAVE)`: devuelve el texto guardado o `null` si no existe; por eso se comprueba antes de convertirlo.
- `JSON.parse(texto)` y `JSON.stringify(arreglo)`: convierten el texto en arreglo al cargar, y el arreglo en texto al guardar.
- `localStorage.setItem(CLAVE, texto)`: guarda; `removeItem(CLAVE)`: elimina esa clave.
- `arreglo.slice()`: devuelve una copia; sin ella, ambas variables apuntarían al mismo arreglo y los cambios alterarían también el estado inicial.

---

## Ejercicio 10: Formularios y AJAX

**1. ¿Qué hace este ejercicio?**
Crea con JavaScript un formulario para buscar usuarios de GitHub. Al enviarlo, comprueba que el campo no esté vacío, hace una petición con `fetch` a `https://api.github.com/users/USUARIO` y muestra el nombre de usuario, el nombre real (si existe), el avatar, los repositorios públicos, los seguidores, a cuántos sigue y el enlace a su perfil. Los errores (campo vacío, usuario inexistente, límite de consultas, error del servidor o falla de red) se muestran en la página, sin `alert()`. Una nueva búsqueda reemplaza el resultado anterior sin recargar.

**2. ¿Qué conceptos utilicé?**
`fetch`, `async / await`, `try / catch`, JSON, evento `submit`, `preventDefault`, códigos de estado HTTP (`status` y `ok`), `encodeURIComponent`, DOM, condicionales y funciones.

**3. ¿Ya conocía estos conceptos?**
No, la verdad no, al día que realicé está práctica, por la profa que nos enseño el día jueves 01 de octubre como funciona un poco el AJAX, entonces fue como relacione ciertos conceptos.

**4. ¿Tuve dificultades?**
- Mi primera versión escribió mal `encodeURIComponent`. El error se capturó en el `catch` y toda búsqueda mostraba "No se pudo completar la petición". Entendí que un `catch` puede ocultar errores de programación; para descubrirlo conviene mostrar el error con `console.log(error)`.
-  El nombre `formulario` ya existía en otros ejercicios y provocaba `SyntaxError`; le agregué un sufijo.
- Distinguir un usuario que no existe de un fallo de la petición (ver la pregunta 12).

**5. ¿Utilicé Inteligencia Artificial?** Sí.
- **Problema:** hacer una petición a una API, procesar la respuesta y manejar los distintos errores.
- **Qué pregunté:** una explicación de AJAX con un ejemplo con otra API (JSONPlaceholder) y una propuesta de código para el ejercicio.
- **Qué usé:** la estructura del código que me proporcionó la IA (las funciones `mostrarMensaje`, `mostrarUsuario` y `buscarUsuario`, y el manejo de los códigos 404, 403 y otros errores). 
- `fetch(url)`: envía una petición HTTP y devuelve una promesa que se cumple cuando el servidor responde.
- `await`: espera el resultado antes de continuar; solo funciona dentro de una función `async`.
- `respuesta.status` y `respuesta.ok`: el código HTTP y un indicador que vale `true` para los códigos 200 a 299.
- `respuesta.json()`: lee el cuerpo y lo convierte en un objeto de JavaScript.
- `e.preventDefault()`: evita que el formulario recargue la página.
- `try / catch`: el `catch` se ejecuta cuando la petición no puede completarse.
- `encodeURIComponent(usuario)`: codifica caracteres especiales para que no alteren la dirección.

### Preguntas adicionales

**6. ¿Qué entiendo por AJAX?**
Es una técnica que permite que JavaScript pida o envíe datos a un servidor en segundo plano, sin recargar la página, y use la respuesta para modificar solo una parte del DOM.

**7. ¿Por qué la página no necesita recargarse para obtener nueva información?**
Porque la petición la hace JavaScript con `fetch` de forma asíncrona: el navegador sigue mostrando la página mientras espera. Cuando llega la respuesta, solo se modifican los elementos necesarios del DOM. Además, `preventDefault()` cancela la recarga que provocaría el envío normal del formulario.

**8. ¿Qué hace `fetch()`?**
Envía una petición HTTP a la dirección indicada (por defecto, de tipo GET) y devuelve una promesa. La promesa se cumple cuando el servidor contesta, aunque sea con un código de error, y se rechaza únicamente cuando la petición no puede completarse.

**9. ¿Qué representa la respuesta obtenida del servidor?**
Es un objeto `Response` que representa lo que contestó el servidor: su código de estado (`status`), si fue exitosa (`ok`), los encabezados y el cuerpo sin procesar. Todavía no son los datos del usuario; para obtenerlos hay que leer el cuerpo con `json()`.

**10. ¿Qué es JSON y para qué se utilizó?**
JSON es un formato de texto para intercambiar datos, con una estructura parecida a los objetos de JavaScript. GitHub envía los datos del usuario en ese formato, y `respuesta.json()` lo convierte en un objeto para acceder a valores como `datos.login` o `datos.followers`.

**11. ¿Qué hace `event.preventDefault()` en el formulario?**
Cancela el comportamiento por defecto del evento `submit`, que consiste en enviar el formulario y recargar la página. Así JavaScript puede manejar el envío sin que se pierda el estado de la página.

**12. ¿Qué diferencia existe entre un error en la petición y buscar un usuario que no existe?**
Si el usuario no existe, el servidor sí contesta, con código 404: la petición se completó, `fetch` no lanza ningún error y se detecta revisando `status` u `ok`. Un error en la petición ocurre cuando no se obtiene respuesta (por ejemplo, sin conexión a Internet): `fetch` rechaza la promesa y el programa salta al `catch`.

**13. Recorrido de los datos, paso a paso**
1. El usuario escribe un nombre y presiona "Buscar usuario"; se dispara el evento `submit`.
2. Se ejecuta `buscarUsuario`, que llama a `preventDefault()` para evitar la recarga.
3. Se lee el campo con `value` y se aplica `trim()`. Si está vacío, `mostrarMensaje` muestra el aviso y el proceso termina.
4. Se muestra "Buscando..." y `fetch` envía la petición a `https://api.github.com/users/` seguido del nombre.
5. `await` espera la respuesta de GitHub.
6. Se revisa `status`: con 404 se informa que el usuario no existe; con 403 u otro código de error se muestra el aviso correspondiente; si no hay respuesta, se salta al `catch`.
7. Si la respuesta es correcta, `respuesta.json()` convierte el cuerpo en un objeto.
8. `mostrarUsuario` crea la tarjeta con avatar, datos y enlace, vacía la sección de resultado e inserta la tarjeta en el DOM.
9. El usuario ve la información; si busca otro nombre, el proceso se repite y reemplaza el resultado anterior.