import { productos } from "./productos.js";
import { renderizarCatalogo } from "./render/renderCatalogo.js";
import { productosGustar, productosRecomendados } from "./render/renderRecomendados.js";
import { renderizarProducto} from "./render/renderProductoIndividual.js";

document.addEventListener("DOMContentLoaded", () => {

  // Condicion para cargar funciones en paginas especificas
  if (window.location.pathname.includes("productos.html")) {
  // Mostrar productos
  renderizarCatalogo(productos)
}
if (window.location.pathname.includes("producto-pagina.html")) {
  // Mostrar recomendados
  productosRecomendados()
  productosGustar()
  renderizarProducto()
}

const menuBtn = document.getElementById("boton-menu");
const mobileMenu = document.getElementById("menu-celular");

mobileMenu.classList.add("hidden")
mobileMenu.classList.add("lg:flex")

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
  
  // Carrito Deslizante
  const botonCarrito = document.getElementById("botonCarrito");
  const carritoPanel = document.getElementById("carritoPanel");

  botonCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    carritoPanel.classList.toggle("visible");
    carritoPanel.classList.toggle("oculto");

    if (carritoPanel.innerHTML.trim() === "") {
      fetch("cart.html")
        .then((response) => response.text())
        .then((html) => {
          carritoPanel.innerHTML = html;

          // Cerrar carrito
          const cerrarCarrito = document.getElementById("cerrarCarrito");
          if (cerrarCarrito) {
            cerrarCarrito.addEventListener("click", () => {
              carritoPanel.classList.remove("visible");
              carritoPanel.classList.add("oculto");
            });
          }
        })
        .catch((err) => {
          carritoPanel.innerHTML = "<p>Error al cargar el carrito.</p>";
          console.error("Error cargando el carrito:", err);
        });
    }
  });

  // Cerrar el carrito al hacer clic fuera
  document.addEventListener("click", (e) => {
    const clicFuera =
      !carritoPanel.contains(e.target) && !botonCarrito.contains(e.target);
    if (carritoPanel.classList.contains("visible") && clicFuera) {
      carritoPanel.classList.remove("visible");
      carritoPanel.classList.add("oculto");
    }
  });
});
