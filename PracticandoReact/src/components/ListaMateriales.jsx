import TarjetaMaterial from './TarjetaMaterial.jsx'

function ListaMateriales({ materiales }) {
  return (
    <section className="seccion">
      <h2>Materiales</h2>
      <div className="lista-tarjetas">
        {materiales.map((material) => (
          <TarjetaMaterial key={material.id} material={material} />
        ))}
      </div>
    </section>
  )
}

export default ListaMateriales