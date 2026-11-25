// 1. Función declarada con function.
// Recibe un material y devuelve un texto con su nombre y ubicación.
export function describirMaterial(material) {
  return `${material.nombre} (${material.ubicacion})`
}

// 2. Función flecha con retorno implícito.
// Devuelve true si el material no está reservado.
export const estaDisponible = (material) => !material.reservado

// 3. Función flecha con bloque y return explícito.
// Quita espacios al inicio y al final y convierte el texto a minúsculas.
export const normalizarTexto = (texto) => {
  const textoLimpio = texto.trim().toLowerCase()
  return textoLimpio
}