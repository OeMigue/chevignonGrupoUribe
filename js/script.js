import { productos } from "./productos.js";
import { renderizarCatalogo } from "./render/renderCatalogo.js";
import {
  productosGustar,
  productosRecomendados,
} from "./render/renderRecomendados.js";
import { renderizarProducto } from "./render/renderProductoIndividual.js";
import { activarCarouseles } from "./secciones.js";
/* import { mostrarDescripcion } from "./render/renderDescripcion.js"; */

document.addEventListener("DOMContentLoaded", () => {
  // Condicion para cargar funciones en paginas especificas

  if (window.location.pathname.includes("index.html")) {
    // Activar carouseles
    activarCarouseles();
  }

  if (window.location.pathname.includes("productos.html")) {
    // Mostrar productos
    renderizarCatalogo(productos);

    /* const productosGuardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];

  // Datos de la categoría (pueden venir de un fetch o estar hardcodeados)
  const categoria = {
    titulo: "Ropa de moda",
    descripcion: "Diferentes estilos y siluetas; una amplia gama de colores y diseños novedosos.",
    breadcrumb: ["Home", "New Arrivals"]
  };

  // Rellenar HTML
  document.getElementById("categoriaTitulo").textContent = categoria.titulo;
  document.getElementById("categoriaDescripcion").textContent = categoria.descripcion;
  document.getElementById("totalProductos").textContent = `${productosGuardados.length} productos`;


  // Ordenar productos al cambiar select
  document.getElementById("ordenarSelect").addEventListener("change", (e) => {
    const orden = e.target.value;
    let productosOrdenados = [...productosGuardados];

    if (orden === "precio-asc") {
      productosOrdenados.sort((a, b) => a.precio - b.precio);
    } else if (orden === "precio-desc") {
      productosOrdenados.sort((a, b) => b.precio - a.precio);
    } else if (orden === "fecha") {
      productosOrdenados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    // Aquí renderizas de nuevo la lista de productos
    console.log("Productos ordenados:", productosOrdenados);
  }); */
  }
  if (window.location.pathname.includes("producto-pagina.html")) {
    // Mostrar recomendados
    productosRecomendados();
    productosGustar();
    renderizarProducto();
  }

  const menuBtn = document.getElementById("boton-menu");
  const mobileMenu = document.getElementById("menu-celular");

  mobileMenu.classList.add("hidden");
  mobileMenu.classList.add("lg:flex");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Carrito Deslizante
  const botonCarrito = document.getElementById("botonCarrito");
  const carritoPanel = document.getElementById("carritoPanel");

  carritoPanel.classList.add("hidden");

  botonCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    carritoPanel.classList.toggle("hidden");

    if (carritoPanel.innerHTML.trim() === "") {
      fetch("cart.html")
        .then((response) => response.text())
        .then((html) => {
          carritoPanel.innerHTML = html;

          // Cerrar carrito
          const cerrarCarrito = document.getElementById("cerrarCarrito");
          if (cerrarCarrito) {
            cerrarCarrito.addEventListener("click", () => {
              carritoPanel.classList.toggle("hidden");
            });
          }
        });
    }
  });

  // Cerrar el carrito al hacer clic fuera
  document.addEventListener("click", (e) => {
    const clicFuera =
      !carritoPanel.contains(e.target) && !botonCarrito.contains(e.target);
    if (!carritoPanel.classList.contains("hidden") && clicFuera) {
      carritoPanel.classList.add("hidden");
    }
  });
});
