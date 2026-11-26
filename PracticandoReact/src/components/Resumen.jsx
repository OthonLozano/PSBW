import { estaDisponible } from '../utils/materiales.js'

function Resumen({ materiales, materialesFiltrados }) {
  // Los cuatro valores se calculan a partir de los arreglos en cada renderizado.
  // No hay contadores guardados aparte que se tengan que actualizar a mano.
  const totalMateriales = materiales.length
  const totalDisponibles = materiales.filter(estaDisponible).length
  const totalReservados = materiales.filter((material) => !estaDisponible(material)).length
  const totalResultados = materialesFiltrados.length

  return (
    <section className="seccion">
      <h2>Resumen</h2>

      {/* Ternario: alterna entre dos textos según si los filtros ocultan materiales */}
      <p>
        {totalResultados === totalMateriales
          ? 'Se muestran todos los materiales.'
          : `Se muestran ${totalResultados} de ${totalMateriales} materiales según los filtros.`}
      </p>

      <div className="resumen-datos">
        <div className="dato">
          <strong>{totalMateriales}</strong>
          Registrados
        </div>
        <div className="dato">
          <strong>{totalDisponibles}</strong>
          Disponibles
        </div>
        <div className="dato">
          <strong>{totalReservados}</strong>
          Reservados
        </div>
        <div className="dato">
          <strong>{totalResultados}</strong>
          Resultados
        </div>
      </div>

      {/* &&: el aviso solo aparece cuando no queda ningún material disponible */}
      {totalDisponibles === 0 && (
        <p className="mensaje mensaje-aviso">No hay materiales disponibles en este momento.</p>
      )}
    </section>
  )
}

export default Resumen