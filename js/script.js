import { renderizarCatalogo } from "/js/render/renderCatalogo.js";
import { activarCarouseles } from "/js/secciones.js";
import { contenedorCarrito, renderCarrito, getCart} from "./carrito.js";
import { renderizarProducto, productosRecomendados, productosGustar } from "./render/renderProductoIndividual.js";
import { productos } from "./productos.js";



  
document.addEventListener("DOMContentLoaded", () => {
  // Condicion para cargar funciones en paginas especificas

  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" ) {
    // Activar carouseles
    activarCarouseles();
    
   
    
  }
  if (window.location.pathname.includes("productos.html") || window.location.pathname === "/")  {
    // Renderizar catalogo de productos
    renderizarCatalogo(productos);
    
    

  }

  if (window.location.pathname.includes("producto-pagina.html") || window.location.pathname === "/") {
   // funcionalidad general de carrito
    renderizarProducto("productoSeleccionado");
    productosGustar (); 
    productosRecomendados(); 
    renderizarCatalogo()
  }
});

  contenedorCarrito()
  renderCarrito(getCart())
  


// funcionalidad carruseles
  const hero = document.getElementById("hero-section");

  const fondos = [
    "/assets/images/vaquero.jpg",
    "/assets/images/vaquera.jpg",
    "/assets/images/cuero.jpg",
  ];

  let indice = 0;

  setInterval(() => {
    indice = (indice + 1) % fondos.length;

    // Fade suave sin desaparecer contenido
    hero.style.opacity = 0.8;

    setTimeout(() => {
      hero.style.backgroundImage = `url('${fondos[indice]}')`;
      hero.style.opacity = 1;
    }, 0); // delay para que el fade sea fluido
  }, 5000); // cambia cada 5 segundos