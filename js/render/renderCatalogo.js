import { agregarAlCarrito, showToast} from "../carrito.js";

export function renderizarCatalogo(productos, contenedorId = "catalogo") {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = ""; // Limpiar antes de renderizar

  productos.forEach((producto) => {
    // ← Este foreach SOLO crea las tarjetas
    const tarjeta = document.createElement("div");
    tarjeta.classList.add(
      "card-producto"
    );

    tarjeta.innerHTML = `
      <div class="contenedor-imagen-productos">
        <img class="" src="${producto.imagen}" alt="${
      producto.nombre
    }">
      </div>
      <div class="contenedor-texto-producto">
      <h3>${producto.nombre}</h3>
      <span>$${producto.precio.toLocaleString()}</span>
      </div>
      <div class="botones-producto">
        <button class="btn-ver-mas ">Ver más</button>
        <button 
          class="btn-add-to-cart "
          data-id="${producto.id}"
        >
          Agregar
        </button>
      </div>
    `;
    // Botón "Ver más" → guarda producto y redirige
    tarjeta.querySelector(".btn-ver-mas").addEventListener("click", () => {
      localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
      window.location.href = "producto-pagina.html";
    });
    tarjeta.querySelector(".btn-add-to-cart").addEventListener("click", () => {
      agregarAlCarrito(producto); // producto viene del render del catálogo
      
      showToast("✨🛒 Producto agregado con éxito\nGracias por tu elección 🌟")
    });
    contenedor.appendChild(tarjeta);
  });
}
