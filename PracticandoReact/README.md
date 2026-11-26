# Segunda Vida: banco de materiales para maquetas

Práctica **Practicando React** de la experiencia educativa Programación de Sistemas Basados en Web (PSBW).

**Autor:** Othon Lozano Vidal

Aplicación de una sola página, construida con React y Vite, para registrar, consultar y gestionar materiales recuperados (cartón, madera, tela y plástico) que pueden reutilizarse en maquetas. Permite registrar materiales, buscarlos y filtrarlos, consultar su detalle, reservarlos o liberarlos, y conserva la información al recargar la página mediante `localStorage`. La reserva es una simulación local: no hay cuentas de usuario ni base de datos.

---

## Requisitos

| Herramienta | Versión |
|---|---|
| Node.js | 20 o superior (el proyecto se desarrolló con la v24.11.1) |
| npm | Incluido con Node.js |

## Instalación y ejecución

```bash
git clone https://github.com/OthonLozano/PSBW.git
cd PSBW/PracticandoReact
npm install
npm run dev
```

Después de `npm run dev`, abrir en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite |
| `npm run build` | Genera la versión de producción en la carpeta `dist/` |
| `npm run preview` | Sirve localmente la versión generada por `build` |
| `npm run lint` | Revisa el código con ESLint |

---

## Estructura del proyecto

```
PracticandoReact/
├── public/
├── src/
│   ├── components/
│   │   ├── DetalleMaterial.jsx
│   │   ├── Encabezado.jsx
│   │   ├── Filtros.jsx
│   │   ├── FormularioMaterial.jsx
│   │   ├── ListaMateriales.jsx
│   │   ├── Resumen.jsx
│   │   └── TarjetaMaterial.jsx
│   ├── data/materiales.js
│   ├── utils/materiales.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

| Carpeta o archivo | Contenido |
|---|---|
| `src/data/materiales.js` | Datos: arreglo inicial de materiales y lista de categorías |
| `src/utils/materiales.js` | Funciones auxiliares que no dependen de React |
| `src/components/` | Un archivo por componente de la interfaz |
| `src/App.jsx` | Componente coordinador: guarda el estado y las funciones que lo modifican |
| `src/App.css` | Estilos de toda la aplicación |

## Ubicación de cada funcionalidad

| Ejercicio | Archivos principales |
|---|---|
| 1. Datos y formas de función | `src/data/materiales.js`, `src/utils/materiales.js` |
| 2. Interfaz dividida en componentes | `src/App.jsx`, `src/components/*` |
| 3. Formulario controlado y validación | `src/components/FormularioMaterial.jsx`, función `manejarRegistro` en `src/App.jsx` |
| 4. Búsqueda y filtros combinados | `src/components/Filtros.jsx`, `materialesFiltrados` en `src/App.jsx`, `src/components/ListaMateriales.jsx` |
| 5. Consulta de detalle con `find` | `src/components/DetalleMaterial.jsx`, `idSeleccionado` y `materialSeleccionado` en `src/App.jsx`, botón en `src/components/TarjetaMaterial.jsx` |
| 6. Reservar y liberar | Función `manejarCambioReserva` en `src/App.jsx`, botón en `src/components/TarjetaMaterial.jsx` |
| 7. Resumen y mensajes según el estado | `src/components/Resumen.jsx` |
| 8. Persistencia con JSON y `useEffect` | `cargarMateriales`, `useEffect` y `manejarRestablecer` en `src/App.jsx` |

---

## Uso de inteligencia artificial (resumen general)

**Sí.** Utilicé Claude (Anthropic) durante toda la práctica. Le pedí que dividiera la actividad en bloques pequeños y que me guiara paso a paso. En cada paso Claude propuso el código y la explicación de cada parte. Yo lo incorporé en VS Code, lo probé en el navegador con los casos indicados, ejecuté `npm run lint` y `npm run build` antes de cada commit y registré un commit por bloque. En cada ejercicio indico qué solicité, qué parte incorporé y cómo funciona.

---

## Ejercicio 1 · Datos y diferentes formas de función

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Define los datos iniciales de la aplicación y tres funciones auxiliares.

- `src/data/materiales.js` exporta `materialesIniciales`, un arreglo de seis materiales con ids fijos (`mat-01` a `mat-06`) distribuidos en cuatro categorías (Cartón, Madera, Tela y Plástico), y `categorias`, la lista que usan tanto el formulario de registro como el filtro.
- `src/utils/materiales.js` exporta las tres funciones:

| Función | Forma | Qué hace | Dónde se usa |
|---|---|---|---|
| `describirMaterial(material)` | Declarada con `function` | Devuelve un texto con el nombre y la ubicación, por ejemplo `Cartón corrugado (Estante A)` | Mensajes de éxito y de duplicado en `App.jsx`, título de `DetalleMaterial.jsx` |
| `estaDisponible` | Flecha con retorno implícito | Devuelve `true` si el material no está reservado | `TarjetaMaterial.jsx`, `DetalleMaterial.jsx`, filtro "Solo disponibles" en `App.jsx` y conteos de `Resumen.jsx` |
| `normalizarTexto` | Flecha con bloque y `return` explícito | Quita los espacios al inicio y al final y convierte el texto a minúsculas | Validaciones de espacios y de duplicados, y búsqueda por nombre en `App.jsx` |

### 2. ¿Qué conceptos utilizaste?

Módulos ES (`export const`, `export function`, importación con nombre), arreglos de objetos, función declarada, función flecha con retorno implícito, función flecha con bloque y `return` explícito, *template literals*, operador `!`, métodos `trim()` y `toLowerCase()`.

### 3. ¿Qué datos recibe y qué resultado produce?

`describirMaterial` recibe un objeto material y produce una cadena. `estaDisponible` recibe un objeto material y produce un booleano. `normalizarTexto` recibe una cadena y produce otra cadena normalizada: `"  ESTANTE A "` produce `"estante a"`, y un texto con solo espacios produce `""`. Este último resultado es el que permite detectar los campos con solo espacios en el Ejercicio 3.

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

La tarea pide que las tres funciones se utilicen en la aplicación y no solo se declaren. Antes de escribirlas decidí en qué ejercicio se usaría cada una (tabla anterior). Como en ese momento ningún componente importaba los archivos todavía, comprobé los datos y las funciones directamente con Node desde la terminal (`node -e "import('./src/utils/materiales.js')..."`): verifiqué que hubiera 6 materiales con 6 ids únicos y 4 categorías, y que las funciones devolvieran los resultados esperados. Además, los dos archivos se llaman `materiales.js` pero están en carpetas distintas, así que tuve que cuidar las rutas de importación (`./data/` para los datos y `./utils/` para las funciones).

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude el arreglo inicial y las tres funciones con la forma que pide la tarea. Incorporé ambos archivos completos. Los datos se diseñaron para facilitar las pruebas: "Cartón corrugado" en "Estante A" coincide con el ejemplo de duplicado de la tarea, y hay dos materiales de Cartón cuyo nombre contiene "cart" para probar la combinación de filtros. Cada función funciona como se describe en la pregunta 3.

---

## Ejercicio 2 · Interfaz dividida en componentes

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Divide la interfaz en siete componentes dentro de `src/components/`: `Encabezado`, `FormularioMaterial`, `Filtros`, `ListaMateriales`, `TarjetaMaterial`, `DetalleMaterial` y `Resumen`. `App.jsx` es el componente coordinador: guarda el arreglo de materiales en su estado y pasa a los hijos los datos y las funciones que necesitan.

`ListaMateriales.jsx` genera las tarjetas con `map`, usa `key={material.id}` y envía cada material por props a `TarjetaMaterial.jsx`. Todos los componentes con props las reciben con desestructuración, por ejemplo `function TarjetaMaterial({ material, alVerDetalle, alCambiarReserva })`.

### 2. ¿Qué conceptos utilizaste?

Componentes funcionales, JSX, props, desestructuración de props, `useState`, elevación del estado (*state hoisting*), renderizado de listas con `map`, propiedad `key`, paso de funciones por props (*prop drilling*), `export default`.

### 3. ¿Qué datos recibe y qué resultado produce?

`App` parte del arreglo de materiales guardado en su estado. `ListaMateriales` recibe un arreglo y produce una tarjeta por material. Cada `TarjetaMaterial` recibe un objeto material y muestra nombre, categoría, ubicación y disponibilidad. Los hijos nunca modifican sus props: para pedir un cambio llaman a funciones que reciben del padre (`alRegistrar`, `alVerDetalle`, `alCambiarReserva`, etc.).

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

En la práctica anterior perdí puntos porque usé el mismo nombre para un elemento y para una función dentro del mismo archivo. Para evitarlo establecí una convención de nombres desde el inicio: las funciones de `App` que manejan eventos empiezan con `manejar` (`manejarVerDetalle`) y las props que las reciben empiezan con `al` (`alVerDetalle`). Así una función y una prop nunca comparten nombre. Otra decisión fue la `key`: usé `material.id` y no el índice del arreglo, porque el índice cambia cuando un filtro oculta tarjetas y el id no. Por último, al pasar `TarjetaMaterial` de `App` a `ListaMateriales`, eliminé su importación en `App`, porque ESLint marca como error las importaciones sin usar.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude que me ayudara a dividir la interfaz en componentes y a definir qué datos debía guardar `App` y cuáles debían llegar por props. Incorporé la estructura de componentes, la convención de nombres y los estilos de `App.css`. Funciona así: `App` es la única fuente de verdad, cada hijo muestra lo que recibe y avisa los cambios llamando a una función del padre.

---

## Ejercicio 3 · Formulario controlado y validación

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

`src/components/FormularioMaterial.jsx` contiene un formulario con cuatro campos controlados (nombre, descripción, categoría mediante `select` y ubicación). Al enviarlo llama a `alRegistrar`, que en `App.jsx` es la función `manejarRegistro`. Esa función valida, agrega el material y guarda el mensaje que se muestra dentro del formulario.

| Validación | Cómo se realiza |
|---|---|
| Evitar la recarga | `e.preventDefault()` en `manejarEnvio` |
| Campos con información | `find` busca el primer campo cuyo valor sea `''` y el mensaje indica cuál es |
| Rechazar solo espacios | `find` busca un campo donde `normalizarTexto(valor) === ''` |
| Rechazar duplicados | `find` busca un material cuyo nombre **y** ubicación coincidan después de normalizar ambos lados |
| Agregar el material | Se crea con id `mat-` + `crypto.randomUUID()`, textos sin espacios en los extremos y `reservado: false`, y se agrega con `[...materiales, nuevoMaterial]` |
| Limpiar y confirmar | `manejarRegistro` devuelve `true` y el formulario vacía sus campos. Se muestra en verde `Material registrado: ...` |
| Error | `manejarRegistro` devuelve `false`, el formulario conserva lo capturado y se muestra el mensaje en rojo. No se usa `alert()`. |

### 2. ¿Qué conceptos utilizaste?

Componentes controlados (`value` + `onChange`), estado local con `useState`, evento `onSubmit`, `e.preventDefault()`, método `find`, operador *spread* para crear un arreglo nuevo, operadores `&&` y `||`, renderizado condicional con `&&`, *template literals*, `crypto.randomUUID()`.

### 3. ¿Qué datos recibe y qué resultado produce?

El formulario recibe por props `mensaje` (objeto `{ tipo, texto }` o `null`) y la función `alRegistrar`. Envía a `App` un objeto con `nombre`, `descripcion`, `categoria` y `ubicacion`. Si los datos son válidos, el resultado es un material nuevo al final de la lista y un mensaje de éxito. Si no lo son, el resultado es un mensaje de error y el arreglo no cambia. Ejemplo: si existe "Cartón corrugado" en "Estante A", registrar `" cartón corrugado "` en `"ESTANTE A"` se rechaza con `Ya existe un registro de Cartón corrugado (Estante A).`, y el mismo nombre en "Estante E" sí se registra.

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

La principal dificultad fue decidir dónde validar. El formulario guarda lo que se escribe, pero no conoce la lista de materiales, que se necesita para detectar duplicados. Lo resolví dejando la validación en `App`, dentro de `manejarRegistro`, y haciendo que la función devuelva `true` o `false`: así el formulario sabe si debe limpiar sus campos o conservarlos. El mensaje también quedó en el estado de `App` para que el botón "Restablecer datos iniciales" del Ejercicio 8 pueda borrarlo. Además, no usé el atributo `required` en los campos, porque el navegador mostraría su propio aviso antes que el mensaje de la interfaz que pide la tarea. Comprobé nueve casos: todos los campos vacíos, un solo campo lleno, sin categoría, nombre con solo espacios, ubicación con solo espacios, el duplicado del ejemplo de la tarea, el mismo nombre en otra ubicación, la repetición de ese registro y un registro válido después de un error.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude que me guiara para construir el formulario controlado y las validaciones. Claude propuso `FormularioMaterial.jsx` y la función `manejarRegistro`, y los incorporé en dos etapas: primero el registro sin validar, para comprobar que agregaba y limpiaba, y después las tres validaciones. Funciona como se describe en la pregunta 1.

---

## Ejercicio 4 · Búsqueda y filtros combinados

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

`src/components/Filtros.jsx` muestra el campo de búsqueda por nombre, el selector de categoría con la opción "Todas", la casilla "Solo disponibles" y el botón "Limpiar filtros". Los valores se guardan en el estado de `App.jsx` (`busqueda`, `categoriaFiltro`, `soloDisponibles`). En `App.jsx`, `materialesFiltrados` se calcula con `filter` y un material solo aparece si cumple las tres condiciones al mismo tiempo:

| Condición | Expresión |
|---|---|
| Nombre | `normalizarTexto(material.nombre).includes(textoBusqueda)` |
| Categoría | `categoriaFiltro === 'Todas' \|\| material.categoria === categoriaFiltro` |
| Disponibilidad | `!soloDisponibles \|\| estaDisponible(material)` |

`ListaMateriales.jsx` muestra `No hay materiales que coincidan con los filtros` cuando el arreglo filtrado está vacío. `manejarLimpiarFiltros` regresa los tres controles a sus valores iniciales.

### 2. ¿Qué conceptos utilizaste?

Elevación del estado, componentes controlados (incluida una casilla con `checked`), método `filter`, método `includes`, operadores `&&` y `||`, valores derivados, operador ternario para alternar entre el aviso y las tarjetas.

### 3. ¿Qué datos recibe y qué resultado produce?

`Filtros` recibe los tres valores actuales y las funciones para cambiarlos. El filtrado recibe el arreglo completo `materiales` y los tres criterios, y produce un arreglo nuevo, `materialesFiltrados`, que es el que se muestra. Ejemplo: con búsqueda `cart`, categoría Cartón y "Solo disponibles" activado, después de reservar "Tubos de cartón" solo aparece "Cartón corrugado".

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

Decidí no guardar `materialesFiltrados` en otro estado, sino calcularlo en cada renderizado a partir de `materiales` y de los filtros. Si fuera un estado aparte habría que actualizarlo a mano con cada cambio y podría quedar desincronizado. También comprobé que filtrar no elimina datos: con un filtro activo registré "Cartulina", apareció de inmediato en la lista filtrada y, al limpiar los filtros, aparecieron los siete materiales. Otra dificultad fue que la prueba de "Solo disponibles" no se podía hacer en este bloque, porque todos los materiales seguían disponibles. La completé después de programar el Ejercicio 6. Por último, la búsqueda distingue acentos ("carton" no encuentra "Cartón"). La tarea solo pide no distinguir mayúsculas, así que lo dejé así.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude el componente de filtros y la lógica para combinar los tres criterios. Incorporé `Filtros.jsx`, el cálculo de `materialesFiltrados` y el aviso de la lista. Funciona como se describe en la pregunta 1: `filter` crea un arreglo nuevo y el arreglo original nunca se modifica.

---

## Ejercicio 5 · Consulta de detalle con `find`

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Cada tarjeta (`TarjetaMaterial.jsx`) tiene un botón "Ver detalle" que llama a `alVerDetalle(material.id)`. En `App.jsx`, `manejarVerDetalle` guarda ese id en el estado `idSeleccionado`, y `materialSeleccionado` se obtiene con `materiales.find((material) => material.id === idSeleccionado)`. `DetalleMaterial.jsx` usa renderizado condicional para mostrar uno de tres casos:

| Caso | Condición | Se muestra |
|---|---|---|
| Sin selección | `idSeleccionado === null` | `Selecciona un material para consultar sus datos` |
| Id inexistente | Hay id, pero `find` devolvió `undefined` | `El material seleccionado ya no existe en el banco de materiales.` |
| Material encontrado | `find` devolvió un objeto | Título con `describirMaterial` y todos los datos: id, nombre, descripción, categoría, ubicación y disponibilidad |

El botón "Cerrar detalle" llama a `manejarCerrarDetalle`, que regresa `idSeleccionado` a `null`.

### 2. ¿Qué conceptos utilizaste?

Estado con `useState`, método `find`, renderizado condicional con `if / else if / else`, fragmentos (`<> </>`), funciones flecha en `onClick`, paso de funciones por props a través de `ListaMateriales`.

### 3. ¿Qué datos recibe y qué resultado produce?

El botón envía el id del material. `DetalleMaterial` recibe `idSeleccionado`, el objeto `material` encontrado (o `undefined`) y la función `alCerrar`, y produce la sección de detalle correspondiente al caso.

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

El caso del id inexistente no se produce con ningún botón de la aplicación, así que para probarlo cambié temporalmente el valor inicial a `useState('mat-99')`. Al guardar, el detalle no cambiaba, porque la recarga en caliente de Vite conserva el estado de React. Tuve que recargar la página para que se usara el nuevo valor inicial. Después regresé el código a `useState(null)` y busqué `mat-99` en el proyecto para confirmar que no quedara. También decidí guardar solo el id, y no una copia del objeto, y buscar el material en `materiales` y no en `materialesFiltrados`. Así el detalle sigue visible cuando un filtro oculta su tarjeta y muestra siempre la versión actual del material, por ejemplo después de reservarlo.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude el componente de detalle con los tres casos condicionales y la forma de probar el caso del id inexistente. Incorporé `DetalleMaterial.jsx`, el estado `idSeleccionado`, las funciones `manejarVerDetalle` y `manejarCerrarDetalle` y el botón de la tarjeta. Funciona como se describe en la pregunta 1. El `onClick` usa una función flecha (`() => alVerDetalle(material.id)`) para que la función se ejecute al hacer clic y no al dibujar la tarjeta.

---

## Ejercicio 6 · Reservar y liberar sin modificar el estado directamente

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Cada tarjeta muestra "Reservar" si el material está disponible o "Liberar" si está reservado. Al presionarlo se llama a `manejarCambioReserva(id)` en `App.jsx`:

```jsx
const materialesActualizados = materiales.map((material) => {
  if (material.id === id) {
    return { ...material, reservado: !material.reservado }
  }
  return material
})
setMateriales(materialesActualizados)
```

`map` crea un arreglo nuevo, el *spread* crea un objeto nuevo solo para el material modificado y el resto se conserva igual. Nunca se usa una asignación directa como `material.reservado = true`.

### 2. ¿Qué conceptos utilizaste?

Inmutabilidad, método `map`, operador *spread* en objetos, operador `!`, operador ternario para el texto del botón, actualización de estado con un arreglo nuevo.

### 3. ¿Qué datos recibe y qué resultado produce?

Recibe el id del material. Produce un arreglo nuevo en el que ese material tiene invertido el valor de `reservado`. Como la tarjeta, el detalle, el filtro y el resumen salen del mismo estado, todos se actualizan al mismo tiempo sin código adicional.

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

Quería que una sola función sirviera para reservar y para liberar, y lo resolví con `!material.reservado`. Verifiqué el caso que pide la tarea: con "Solo disponibles" activado, al reservar "Retazos de fieltro" su tarjeta desapareció. Al desactivar el filtro la encontré marcada como reservada y la liberé. También comprobé que, con el detalle de "Botellas de PET" abierto, al reservarla el detalle cambió a "Reservado" sin volver a presionar "Ver detalle", y que el resto de sus datos se conservó.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude la función para cambiar la disponibilidad sin modificar el estado directamente. Incorporé `manejarCambioReserva` y el botón de la tarjeta. Funciona como se describe en la pregunta 1.

---

## Ejercicio 7 · Resumen y mensajes según el estado

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

`src/components/Resumen.jsx` muestra cuatro totales calculados en cada renderizado a partir de los arreglos que recibe:

| Total | Cálculo |
|---|---|
| Registrados | `materiales.length` |
| Disponibles | `materiales.filter(estaDisponible).length` |
| Reservados | `materiales.filter((material) => !estaDisponible(material)).length` |
| Resultados de los filtros | `materialesFiltrados.length` |

Usa un **operador ternario** para alternar entre `Se muestran todos los materiales.` y `Se muestran X de Y materiales según los filtros.`, y una expresión con **`&&`** para mostrar `No hay materiales disponibles en este momento.` solo cuando no queda ningún material disponible.

### 2. ¿Qué conceptos utilizaste?

Valores derivados, método `filter` con una función como *callback*, propiedad `length`, operador ternario, renderizado condicional con `&&`.

### 3. ¿Qué datos recibe y qué resultado produce?

Recibe por props `materiales` (el arreglo completo) y `materialesFiltrados`. Produce los cuatro totales y los mensajes. Ejemplo: con siete materiales, dos reservados y la búsqueda `cart`, el resumen muestra 7 registrados, 5 disponibles, 2 reservados, 2 resultados y el texto `Se muestran 2 de 7 materiales según los filtros.`

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

La tarea pide no mantener contadores independientes. Si los totales estuvieran en el estado, habría que sumarlos y restarlos en cada registro, reserva y liberación, y un olvido los dejaría inconsistentes con las tarjetas. Por eso todos se calculan a partir de los arreglos. Comprobé que el resumen se actualiza al registrar, al rechazar un duplicado (no cambia), al reservar, al liberar y al filtrar. Para probar el `&&` reservé los siete materiales: apareció el aviso, y al liberar uno desapareció.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude el componente de resumen con los totales derivados, un ternario y un `&&`. Incorporé `Resumen.jsx`. Funciona como se describe en la pregunta 1.

---

## Ejercicio 8 · Persistencia con JSON y `useEffect`

### 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Todo está en `src/App.jsx`:

| Parte | Qué hace |
|---|---|
| `CLAVE_ALMACENAMIENTO` | Clave `segunda-vida-materiales` con la que se guarda el arreglo |
| `cargarMateriales()` | Lee `localStorage`. Si no hay nada guardado devuelve `materialesIniciales`; si hay datos, los convierte con `JSON.parse`. Si el texto guardado está dañado, el `try / catch` devuelve los iniciales. |
| `useState(cargarMateriales)` | El estado se crea con los datos recuperados antes del primer renderizado |
| `useEffect` con dependencia `[materiales]` | Guarda el arreglo con `JSON.stringify` cada vez que cambia: al registrar, reservar, liberar o restablecer |
| `manejarRestablecer` | Regresa a los seis materiales originales, todos disponibles, y limpia la selección, los filtros y los mensajes. El `useEffect` guarda el resultado, así que se mantiene al recargar. |

### 2. ¿Qué conceptos utilizaste?

`localStorage` (`getItem`, `setItem`), `JSON.stringify` y `JSON.parse`, `useEffect` con arreglo de dependencias, inicialización del estado con una función, `try / catch`.

### 3. ¿Qué datos recibe y qué resultado produce?

Al iniciar recibe el texto guardado en `localStorage` (o `null`) y produce el arreglo inicial del estado. Cada vez que cambia `materiales`, recibe el arreglo y produce su versión en texto JSON guardada en el navegador. La búsqueda, los filtros y la selección no se guardan y se reinician al recargar, como permite la tarea.

### 4. ¿Qué dificultad encontraste y cómo la resolviste?

La dificultad principal fue evitar que el arreglo inicial sobrescribiera los datos guardados. Si el estado empezara con `materialesIniciales` y después se leyera `localStorage`, el `useEffect` podría guardar primero los iniciales y borrar los cambios. Lo resolví leyendo `localStorage` dentro del valor inicial de `useState`, pasando la función `cargarMateriales` sin paréntesis. Así React la ejecuta una sola vez al crear el estado, y cuando el efecto guarda por primera vez, el estado ya tiene los datos recuperados. Lo comprobé desde la pestaña Application de DevTools: después de registrar y reservar, recargué y los cambios seguían. Al eliminar la clave aparecieron los seis iniciales. Al cambiar el valor guardado por un texto inválido, la aplicación cargó los iniciales sin romperse.

### 5. ¿Utilizaste inteligencia artificial?

**Sí.** Le pedí a Claude cómo guardar y recuperar los materiales sin sobrescribir los datos al iniciar, y cómo implementar el botón de restablecer. Incorporé `cargarMateriales`, el `useEffect` y `manejarRestablecer`. Funciona como se describe en las preguntas 1 y 4.

---

## Preguntas adicionales

### ¿Qué información llega mediante props y cuál se conserva en estado?

| Se conserva en estado | Dónde | Por qué ahí |
|---|---|---|
| `materiales` | `App` | La necesitan la lista, el formulario (duplicados), el detalle y el resumen |
| `busqueda`, `categoriaFiltro`, `soloDisponibles` | `App` | Los usan los filtros, la lista y el resumen |
| `idSeleccionado` | `App` | Lo usan las tarjetas (para seleccionar) y el detalle |
| `mensaje` | `App` | Lo muestra el formulario, pero lo borra el botón de restablecer |
| `nombre`, `descripcion`, `categoria`, `ubicacion` | `FormularioMaterial` | Solo el formulario los necesita mientras se escribe |

Por props llegan los datos de lectura (cada `material` a su tarjeta, el arreglo filtrado a la lista, el material seleccionado al detalle, los valores de los filtros) y las funciones con las que los hijos piden cambios (`alRegistrar`, `alVerDetalle`, `alCambiarReserva`, `alCerrar`, `alLimpiar`, etc.). Los hijos nunca modifican sus props.

### ¿Por qué filtrar no debe eliminar materiales del arreglo original?

Porque los filtros solo deciden qué se muestra, no qué existe. Si se hiciera `setMateriales(materiales.filter(...))`, los materiales ocultos se borrarían del estado y, al limpiar los filtros o cambiar de categoría, ya no se podrían recuperar. Además, el resumen dejaría de contar el total real y esos materiales se perderían de `localStorage`. Por eso `materialesFiltrados` es un arreglo nuevo que se calcula a partir de `materiales`, que nunca se reduce.

### ¿Por qué actualizar el estado requiere crear nuevos arreglos u objetos?

React decide si debe volver a dibujar comparando la referencia del valor anterior con la del nuevo. Si se modifica el arreglo o un objeto existente (`push`, `material.reservado = true`), la referencia sigue siendo la misma y la interfaz puede no actualizarse. Además, se alteraría un objeto que otras partes también usan: por ejemplo, `materialesIniciales` dejaría de tener todos los materiales disponibles y el botón "Restablecer" devolvería materiales reservados. Con `[...materiales, nuevoMaterial]`, `map` y `{ ...material, reservado: ... }` se crean valores nuevos, React detecta el cambio y los datos originales no se alteran.

### ¿Qué hace el `useEffect` de persistencia y de qué depende?

Ejecuta `localStorage.setItem('segunda-vida-materiales', JSON.stringify(materiales))`, es decir, convierte el arreglo a texto JSON y lo guarda en el navegador. Depende únicamente de `[materiales]`: se ejecuta al montar el componente y cada vez que cambia el arreglo (registrar, reservar, liberar o restablecer). Los cambios en los filtros o en la selección no lo disparan, porque no están en sus dependencias.

### ¿Por qué esta aplicación puede cambiar su interfaz sin recargar y por qué eso no significa que tenga un servidor propio?

Es una aplicación de una sola página (SPA). El navegador carga una vez el HTML y el JavaScript, y después React actualiza solo las partes de la interfaz que cambian cuando cambia el estado, mediante el Virtual DOM. Los eventos se manejan en el navegador y `e.preventDefault()` evita que el formulario envíe una petición y recargue la página.

Eso no significa que tenga un servidor propio. El servidor de Vite que se usa en desarrollo solo entrega los archivos del proyecto; no procesa datos ni guarda información. `npm run build` genera archivos estáticos que cualquier servidor de archivos podría entregar. Toda la lógica se ejecuta en el navegador y los datos se guardan en el `localStorage` de cada navegador: no hay base de datos, no hay peticiones `fetch` a una API y otra persona u otro navegador no vería los mismos materiales.

---

## Comprobación antes de entregar

| Prueba | Resultado |
|---|---|
| Enviar un campo con solo espacios | Se muestra el error y no se agrega el material |
| Registrar un duplicado con otras mayúsculas | Se rechaza cuando también coincide la ubicación; con otra ubicación se registra |
| Combinar búsqueda, categoría y disponibilidad | Solo aparecen los materiales que cumplen los tres criterios |
| Consultar un material y después reservarlo | Se actualizan la tarjeta, el detalle y el resumen |
| Recargar después de registrar y reservar | Se recuperan los cambios |
| Restablecer y recargar | Se conservan únicamente los seis materiales iniciales, todos disponibles |

Antes de cada commit se ejecutaron `npm run lint` y `npm run build` sin errores. El historial de Git tiene un commit por bloque de trabajo.