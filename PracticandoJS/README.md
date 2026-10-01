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
