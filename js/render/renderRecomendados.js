// renderRecomendados.js
import { renderizarCatalogo } from "./renderCatalogo.js";
import { obtenerProductosAleatorios } from "../utils/utils.js";
import { productos } from "../productos.js";

export function productosRecomendados() {
  const recomendados = obtenerProductosAleatorios(productos, 3); // 4 aleatorios
  renderizarCatalogo(recomendados, "productosRecomendados"); // ID del contenedor en HTML
}

export function productosGustar() {
  const recomendados = obtenerProductosAleatorios(productos, 3); // 4 aleatorios
  renderizarCatalogo(recomendados, "productosGustar"); // ID del contenedor en HTML
}