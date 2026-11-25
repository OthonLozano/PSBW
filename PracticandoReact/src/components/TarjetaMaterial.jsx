import { estaDisponible } from '../utils/materiales.js'

// Las props se reciben desestructuradas: { material }
function TarjetaMaterial({ material }) {
  return (
    <article className="tarjeta">
      <h3>{material.nombre}</h3>
      <p><strong>Categoría:</strong> {material.categoria}</p>
      <p><strong>Ubicación:</strong> {material.ubicacion}</p>
      <p className={estaDisponible(material) ? 'estado estado-disponible' : 'estado estado-reservado'}>
        {estaDisponible(material) ? 'Disponible' : 'Reservado'}
      </p>
    </article>
  )
}

export default TarjetaMaterial