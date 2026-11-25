import { useState } from 'react'
import { categorias } from '../data/materiales.js'

function FormularioMaterial({ mensaje, alRegistrar }) {
  // Cada campo del formulario está controlado por su propio estado
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [ubicacion, setUbicacion] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault() // Evita que la página se recargue

    // Se envían los datos a App, que valida y responde true o false
    const esRegistroValido = alRegistrar({ nombre, descripcion, categoria, ubicacion })

    // Solo se limpia el formulario si el registro fue válido
    if (esRegistroValido) {
      setNombre('')
      setDescripcion('')
      setCategoria('')
      setUbicacion('')
    }
  }

  return (
    <section className="seccion">
      <h2>Registrar material</h2>
      <form onSubmit={manejarEnvio}>
        <div className="campo">
          <label htmlFor="registro-nombre">Nombre</label>
          <input
            id="registro-nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="registro-descripcion">Descripción</label>
          <textarea
            id="registro-descripcion"
            rows="3"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="registro-categoria">Categoría</label>
          <select
            id="registro-categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((opcion) => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="registro-ubicacion">Ubicación</label>
          <input
            id="registro-ubicacion"
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>

        <button type="submit">Registrar material</button>
      </form>

      {/* El mensaje solo se muestra si existe */}
      {mensaje && (
        <p className={`mensaje mensaje-${mensaje.tipo}`}>{mensaje.texto}</p>
      )}
    </section>
  )
}

export default FormularioMaterial