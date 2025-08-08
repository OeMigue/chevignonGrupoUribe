export function renderizarCatalogo(productos, contenedorId = "catalogo") {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return; // Prevención de errores si no existe el contenedor

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-producto");

    tarjeta.innerHTML = `
      <div class="w-64 h-72 overflow-hidden rounded-lg">
        <img class="w-full h-full object-cover" src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <h3>${producto.nombre}</h3>
      <span>$${producto.precio.toLocaleString()}</span>
      <button>Ver más</button>
    `;

    tarjeta.querySelector("button").addEventListener("click", () => {
      localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
      window.location.href = "producto-pagina.html";
    });

    contenedor.appendChild(tarjeta);
  });
}