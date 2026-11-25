// Categorias disponibles. Se usan en el formulario de registro y en el filtro.
export const categorias = ['Cartón', 'Madera', 'Tela', 'Plástico']

// Materiales con los que inicia la aplicación. Todos empiezan disponibles
export const materialesIniciales = [
  {
    id: 'mat-01',
    nombre: 'Cartón corrugado',
    descripcion: 'Láminas grandes para bases y muros de maqueta',
    categoria: 'Cartón',
    ubicacion: 'Estante A',
    reservado: false,
  },
  {
    id: 'mat-02',
    nombre: 'Tubos de cartón',
    descripcion: 'Tubos de rollos para columnas y torres',
    categoria: 'Cartón',
    ubicacion: 'Estante A',
    reservado: false,
  },
  {
    id: 'mat-03',
    nombre: 'Retazos de madera balsa',
    descripcion: 'Piezas pequeñas para estructuras ligeras',
    categoria: 'Madera',
    ubicacion: 'Estante B',
    reservado: false,
  },
  {
    id: 'mat-04',
    nombre: 'Palitos de madera',
    descripcion: 'Abatelenguas y palitos para cercas y detalles',
    categoria: 'Madera',
    ubicacion: 'Estante B',
    reservado: false,
  },
  {
    id: 'mat-05',
    nombre: 'Retazos de fieltro',
    descripcion: 'Tela de colores para pasto, techos y texturas',
    categoria: 'Tela',
    ubicacion: 'Cajón C',
    reservado: false,
  },
  {
    id: 'mat-06',
    nombre: 'Botellas de PET',
    descripcion: 'Botellas limpias para domos y piezas transparentes',
    categoria: 'Plástico',
    ubicacion: 'Contenedor D',
    reservado: false,
  },
]