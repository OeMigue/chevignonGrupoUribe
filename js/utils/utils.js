// Produce N cantidad de elementos aleatorios
export function obtenerProductosAleatorios(productos, cantidad) {
  return [...productos] // copia para no modificar el original
    .sort(() => Math.random() - 0.5) // desordenar
    .slice(0, cantidad); // tomar los primeros N
}
