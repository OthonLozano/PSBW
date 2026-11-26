import TarjetaMaterial from './TarjetaMaterial.jsx'

function ListaMateriales({ materiales, alVerDetalle, alCambiarReserva }) {
  return (
    <section className="seccion">
      <h2>Materiales</h2>

      {/* Si no hay resultados se muestra un aviso; si los hay, las tarjetas */}
      {materiales.length === 0 ? (
        <p className="mensaje mensaje-aviso">No hay materiales que coincidan con los filtros</p>
      ) : (
        <div className="lista-tarjetas">
          {materiales.map((material) => (
            <TarjetaMaterial
              key={material.id}
              material={material}
              alVerDetalle={alVerDetalle}
              alCambiarReserva={alCambiarReserva}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaMateriales