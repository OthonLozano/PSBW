import { describirMaterial, estaDisponible } from '../utils/materiales.js'

function DetalleMaterial({ idSeleccionado, material, alCerrar }) {
  let contenido

  if (idSeleccionado === null) {
    // Caso 1: todavía no se ha seleccionado ningún material
    contenido = <p>Selecciona un material para consultar sus datos</p>
  } else if (material === undefined) {
    // Caso 2: hay un id seleccionado, pero find no encontró ningún material con ese id
    contenido = (
      <>
        <p className="mensaje mensaje-aviso">
          El material seleccionado ya no existe en el banco de materiales.
        </p>
        <div className="acciones">
          <button type="button" className="boton-secundario" onClick={alCerrar}>
            Cerrar detalle
          </button>
        </div>
      </>
    )
  } else {
    // Caso 3: se muestran todos los datos del material encontrado
    contenido = (
      <>
        <h3>{describirMaterial(material)}</h3>
        <p><strong>Identificador:</strong> {material.id}</p>
        <p><strong>Nombre:</strong> {material.nombre}</p>
        <p><strong>Descripción:</strong> {material.descripcion}</p>
        <p><strong>Categoría:</strong> {material.categoria}</p>
        <p><strong>Ubicación:</strong> {material.ubicacion}</p>
        <p><strong>Disponibilidad:</strong> {estaDisponible(material) ? 'Disponible' : 'Reservado'}</p>
        <div className="acciones">
          <button type="button" className="boton-secundario" onClick={alCerrar}>
            Cerrar detalle
          </button>
        </div>
      </>
    )
  }

  return (
    <section className="seccion">
      <h2>Detalle del material</h2>
      {contenido}
    </section>
  )
}

export default DetalleMaterial