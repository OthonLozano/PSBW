import { useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import ListaMateriales from './components/ListaMateriales.jsx'
import { materialesIniciales } from './data/materiales.js'
import './App.css'

function App() {
  // Arreglo completo de materiales: es la única fuente de verdad de la aplicación
  const [materiales] = useState(materialesIniciales)

  return (
    <div className="app">
      <Encabezado />
      <main className="contenido">
        {/* Columna izquierda: registro y detalle */}
        <aside className="panel-lateral"></aside>

        {/* Columna derecha: resumen, filtros y lista */}
        <div className="panel-principal">
          <ListaMateriales materiales={materiales} />
        </div>
      </main>
    </div>
  )
}

export default App