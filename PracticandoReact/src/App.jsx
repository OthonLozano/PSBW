import { useState } from 'react'
import DetalleMaterial from './components/DetalleMaterial.jsx' 
import Encabezado from './components/Encabezado.jsx'
import Filtros from './components/Filtros.jsx'
import FormularioMaterial from './components/FormularioMaterial.jsx'
import ListaMateriales from './components/ListaMateriales.jsx'
import { materialesIniciales } from './data/materiales.js'
import { describirMaterial, estaDisponible, normalizarTexto } from './utils/materiales.js'
import './App.css'

function App() {
  // Arreglo completo de materiales: es la única fuente de verdad de la aplicación
  const [materiales, setMateriales] = useState(materialesIniciales)

  // Mensaje del formulario: null, o un objeto { tipo: 'error' | 'exito', texto }
  const [mensaje, setMensaje] = useState(null)

  // Valores de los filtros
  const [busqueda, setBusqueda] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')
  const [soloDisponibles, setSoloDisponibles] = useState(false)

  // id del material que se muestra en el detalle (null significa sin selección)
  const [idSeleccionado, setIdSeleccionado] = useState(null)

  // Recibe los datos del formulario. Devuelve true si se registró y false si no.
  const manejarRegistro = (datos) => {
    const campos = [
      { etiqueta: 'Nombre', valor: datos.nombre },
      { etiqueta: 'Descripción', valor: datos.descripcion },
      { etiqueta: 'Categoría', valor: datos.categoria },
      { etiqueta: 'Ubicación', valor: datos.ubicacion },
    ]

    // Validación 1: ningún campo puede estar vacío
    const campoVacio = campos.find((campo) => campo.valor === '')
    if (campoVacio) {
      setMensaje({ tipo: 'error', texto: `El campo ${campoVacio.etiqueta} es obligatorio.` })
      return false
    }

    // Validación 2: ningún campo puede contener solo espacios
    const campoSoloEspacios = campos.find((campo) => normalizarTexto(campo.valor) === '')
    if (campoSoloEspacios) {
      setMensaje({ tipo: 'error', texto: `El campo ${campoSoloEspacios.etiqueta} no puede contener solo espacios.` })
      return false
    }

    // Validación 3: no puede existir otro material con el mismo nombre y la misma ubicación
    const materialDuplicado = materiales.find(
      (material) =>
        normalizarTexto(material.nombre) === normalizarTexto(datos.nombre) &&
        normalizarTexto(material.ubicacion) === normalizarTexto(datos.ubicacion)
    )
    if (materialDuplicado) {
      setMensaje({ tipo: 'error', texto: `Ya existe un registro de ${describirMaterial(materialDuplicado)}.` })
      return false
    }

    // Datos válidos: se crea el material y se agrega en un arreglo nuevo
    const nuevoMaterial = {
      id: `mat-${crypto.randomUUID()}`,
      nombre: datos.nombre.trim(),
      descripcion: datos.descripcion.trim(),
      categoria: datos.categoria,
      ubicacion: datos.ubicacion.trim(),
      reservado: false,
    }

    setMateriales([...materiales, nuevoMaterial])
    setMensaje({ tipo: 'exito', texto: `Material registrado: ${describirMaterial(nuevoMaterial)}` })
    return true
  }

  // Regresa los tres filtros a sus valores iniciales
  const manejarLimpiarFiltros = () => {
    setBusqueda('')
    setCategoriaFiltro('Todas')
    setSoloDisponibles(false)
  }

  // Guarda el id del material que se quiere consultar
  const manejarVerDetalle = (id) => {
    setIdSeleccionado(id)
  }

  // quita la selección y el detalle regresa a su mensaje inicial
  const manejarCerrarDetalle = () => {
    setIdSeleccionado(null)
  }

  // Alterna entre reservado y disponible sin modificar el estado directamente:
  // map crea un arreglo nuevo y el spread crea un objeto nuevo solo para el material que cambia.
  const manejarCambioReserva = (id) => {
    const materialesActualizados = materiales.map((material) => {
      if (material.id === id) {
        return { ...material, reservado: !material.reservado }
      }
      return material
    })

    setMateriales(materialesActualizados)
  }

  // Resultados de los filtros. Se calculan en cada renderizado a partir del arreglo completo.
  // filter crea un arreglo nuevo, así que materiales nunca se modifica.
  const textoBusqueda = normalizarTexto(busqueda)

  const materialesFiltrados = materiales.filter((material) => {
    const coincideNombre = normalizarTexto(material.nombre).includes(textoBusqueda)
    const coincideCategoria = categoriaFiltro === 'Todas' || material.categoria === categoriaFiltro
    const coincideDisponibilidad = !soloDisponibles || estaDisponible(material)

    return coincideNombre && coincideCategoria && coincideDisponibilidad
  })

  // material del detalle. Se busca en el arreglo completo, no en el filtrado,
  // para que el detalle siga visible aunque un filtro oculte su tarjeta.
  const materialSeleccionado = materiales.find((material) => material.id === idSeleccionado)

  return (
    <div className="app">
      <Encabezado />
      <main className="contenido">
        {/* Columna izquierda: registro y detalle */}
        <aside className="panel-lateral">
          <FormularioMaterial mensaje={mensaje} alRegistrar={manejarRegistro} />
          <DetalleMaterial
            idSeleccionado={idSeleccionado}
            material={materialSeleccionado}
            alCerrar={manejarCerrarDetalle}
          />
        </aside>

        {/* Columna derecha: resumen, filtros y lista */}
        <div className="panel-principal">
          <Filtros
            busqueda={busqueda}
            categoriaFiltro={categoriaFiltro}
            soloDisponibles={soloDisponibles}
            alCambiarBusqueda={setBusqueda}
            alCambiarCategoria={setCategoriaFiltro}
            alCambiarSoloDisponibles={setSoloDisponibles}
            alLimpiar={manejarLimpiarFiltros}
          />
          <ListaMateriales
            materiales={materialesFiltrados}
            alVerDetalle={manejarVerDetalle}
            alCambiarReserva={manejarCambioReserva}
          />
        </div>
      </main>
    </div>
  )
}

export default App