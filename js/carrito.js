/* import { productos } from "./productos";
import { renderizarProductoCarrito } from "./render/renderProductoIndividual.js"; */

export function contenedorCarrito() {
  const carritoPanel = document.getElementById("carritoPanel");
  const botonCarrito = document.getElementById("botonCarrito");
  const menuBtn = document.getElementById("boton-menu");
  const mobileMenu = document.getElementById("menu-celular");

  if (!carritoPanel || !botonCarrito) {
    console.warn("No se encontró el contenedor del carrito o el botón.");
    return;
  }

  // Inserta HTML del carrito solo una vez
  carritoPanel.innerHTML = `
    <section class="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-lg flex flex-col">
      <!-- Encabezado -->
      <div class="flex justify-between items-center p-4 border-b">
        <div class="flex items-center gap-2 font-medium text-black">
          <span class="text-xl">
            <img src="https://chevignon.vtexassets.com/assets/vtex.file-manager-graphql/images/4ed64a5a-7b89-40af-b31c-d85a1fa51334___7d5edaf384c76655da436c7883e31b32.svg" class="w-12 h-12" />
          </span>
          Mi bolsa
        </div>
        <button class="text-xl" id="cerrarCarrito">✖️</button>
      </div>

      <div id="cart-items" class="p-4 flex flex-col gap-4 flex-grow overflow-y-auto"></div>

      <div class="border-t p-4 text-sm">
        <div class="flex justify-between text-black mb-2">
          <span>Subtotal</span>
          <span id="subtotalCarrito">$0</span>
        </div>
        <div class="flex justify-between font-bold text-black mb-1">
          <span>Total</span>
          <span id="totalCarrito">$0</span>
        </div>
        <p class="text-[11px] text-gray-500 mb-4">Tasas y fletes calculados en el carrito</p>
        <a href="/checkout.html">
          <button class="w-full bg-black text-white py-3 font-semibold text-sm hover:bg-gray-800">Ir al checkout</button>
        </a>
      </div>
    </section>
  `;

  // Oculta el carrito inicialmente
  carritoPanel.classList.add("hidden");

  // Evento abrir/cerrar con el botón del carrito
  botonCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    carritoPanel.classList.toggle("hidden");
  });

  // Evento cerrar con botón ✖️
  const cerrarCarritoBtn = carritoPanel.querySelector("#cerrarCarrito");
  cerrarCarritoBtn.addEventListener("click", () => {
    carritoPanel.classList.add("hidden");
  });

  // Evento cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    const clicFuera =
      !carritoPanel.contains(e.target) && !botonCarrito.contains(e.target);
    if (!carritoPanel.classList.contains("hidden") && clicFuera) {
      carritoPanel.classList.add("hidden");
    }
  });

  // Opcional: manejar menú móvil
  if (menuBtn && mobileMenu) {
    mobileMenu.classList.add("hidden", "lg:flex");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

export function agregarAlCarrito(producto) {
  // Recuperar o inicializar arreglo del carrito
  let productosCarrito = getCart();

  // Buscar si ya existe el producto
  const index = productosCarrito.findIndex((p) => p.id === producto.id);

  if (index !== -1) {
    // Ya existe → aumentar cantidad
    productosCarrito[index].cantidad += 1;
  } else {
    // No existe → agregarlo
    productosCarrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1,
    });
  }

  // Guardar en localStorage
  saveCart(productosCarrito);

  console.log("Carrito actualizado:", productosCarrito);
}

// Mensaje deproducto agregado
export function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position: fixed; bottom: 20px; right: 20px;
      background: black; color: white;
      padding: 12px 20px; border-radius: 8px;
      opacity: 0; pointer-events: none;
      transform: translateY(20px);
      transition: all 0.3s ease-in-out;
      z-index: 9999;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 2000);
}

// === js/cart.js ===
const CART_KEY = "productosCarrito";

// Obtener carrito
export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}


// Guardar carrito
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart)); // Guarda el array como JSON
  document.dispatchEvent(new CustomEvent("cartUpdated")); // Notifica que el carrito cambió
}


export function renderCarrito() {
  const carrito = getCart();
  const contenedorItem = document.getElementById("cart-items");

  if (!contenedorItem) return;

  // Limpiar el contenido anterior
  contenedorItem.innerHTML = "";

  // Generar los productos
  contenedorItem.innerHTML = carrito.map(producto => `
    <div class="flex gap-4 items-center border-b py-2" data-id="${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="w-16 h-16 object-cover rounded">
      <div class="flex-1">
        <h3 class="text-sm font-semibold text-black">${producto.nombre}</h3>
        <p class="text-xs text-black">Precio: $${parseFloat(producto.precio).toLocaleString()}</p>
        <div class="flex items-center gap-2 mt-1">
          <button class="px-2 border menos text-black" data-id="${producto.id}">−</button>
          <span class="text-black">${producto.cantidad}</span>
          <button class="px-2 border mas text-black" data-id="${producto.id}">+</button>
        </div>
      </div>
      <button class="text-red-500 text-sm remove-item" data-id="${producto.id}">🗑️</button>
    </div>
  `).join("");
}

