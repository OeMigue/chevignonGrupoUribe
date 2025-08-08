export function renderizarProducto () {
    const producto = JSON.parse(localStorage.getItem("productoSeleccionado"));

if (producto) {
  document.getElementById("nombre").textContent = producto.nombre;
  document.getElementById("precio").textContent = "$" + producto.precio;
  document.getElementById("imagen").src = producto.imagen;
} else {
  document.body.innerHTML = "<p>No se encontró el producto. Intenta volver a la tienda.</p>";
} 
}