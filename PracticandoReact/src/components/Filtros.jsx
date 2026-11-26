import { categorias } from '../data/materiales.js'

function Filtros({
  busqueda,
  categoriaFiltro,
  soloDisponibles,
  alCambiarBusqueda,
  alCambiarCategoria,
  alCambiarSoloDisponibles,
  alLimpiar,
}) {
  return (
    <section className="seccion">
      <h2>Buscar y filtrar</h2>

      <div className="campo">
        <label htmlFor="filtro-busqueda">Buscar por nombre</label>
        <input
          id="filtro-busqueda"
          type="text"
          placeholder="Ejemplo: cart"
          value={busqueda}
          onChange={(e) => alCambiarBusqueda(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="filtro-categoria">Categoría</label>
        <select
          id="filtro-categoria"
          value={categoriaFiltro}
          onChange={(e) => alCambiarCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          {categorias.map((opcion) => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>
      </div>

      <div className="casilla">
        <input
          id="filtro-disponibles"
          type="checkbox"
          checked={soloDisponibles}
          onChange={(e) => alCambiarSoloDisponibles(e.target.checked)}
        />
        <label htmlFor="filtro-disponibles">Solo disponibles</label>
      </div>

      <button type="button" className="boton-secundario" onClick={alLimpiar}>
        Limpiar filtros
      </button>
    </section>
  )
}

export default Filtros