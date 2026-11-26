import { estaDisponible } from '../utils/materiales.js'

// Las props se reciben desestructuradas: { material, alVerDetalle, alCambiarReserva }
function TarjetaMaterial({ material, alVerDetalle, alCambiarReserva }) {
  return (
    <article className="tarjeta">
      <h3>{material.nombre}</h3>
      <p><strong>Categoría:</strong> {material.categoria}</p>
      <p><strong>Ubicación:</strong> {material.ubicacion}</p>
      <p className={estaDisponible(material) ? 'estado estado-disponible' : 'estado estado-reservado'}>
        {estaDisponible(material) ? 'Disponible' : 'Reservado'}
      </p>

      <div className="acciones">
        <button type="button" className="boton-secundario" onClick={() => alVerDetalle(material.id)}>
          Ver detalle
        </button>
        <button type="button" onClick={() => alCambiarReserva(material.id)}>
          {estaDisponible(material) ? 'Reservar' : 'Liberar'}
        </button>
      </div>
    </article>
  )
}

export default TarjetaMaterial