# 🧥 Proyecto eCommerce – Chevignon Inspired Store

## ✨ Descripción general

Este proyecto es una tienda online inspirada en la experiencia y estilo visual de **Chevignon Colombia**, desarrollada en **HTML, CSS y JavaScript Vanilla**, con una arquitectura modular, enfoque escalable, y preparada para una futura integración con backend (Node.js, Spring Boot, Firebase, etc.).

---

## 📚 Contenido del sitio

La tienda contiene las siguientes secciones:

| Página            | Función                                                                 |
|-------------------|-------------------------------------------------------------------------|
| `index.html`      | Landing con promociones, nuevas colecciones y acceso a categorías.      |
| `category.html`   | Catálogo filtrable por género, categoría, talla, color y precio.        |
| `product.html`    | Detalle del producto con galería, selección de talla/cantidad y compra. |
| `cart.html`       | Vista del carrito de compras editable por el usuario.                   |
| `checkout.html`   | Proceso simulado de pago/envío del pedido.                              |

---

## 🧱 Estructura del proyecto

```
ecommerce/
├── index.html
├── category.html
├── product.html
├── cart.html
├── checkout.html
│
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── category.js
│   ├── product.js
│   ├── cart.js
│   └── api.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── header.html
│   ├── footer.html
│   ├── product-card.html
│   └── modal.html
│
└── data/
    └── products.json
```

---

## ⚙️ Tecnologías usadas

- HTML5 + CSS3
- JavaScript Vanilla (modular)
- JSON para datos simulados
- Estructura pensada para backend (REST API, tokens, DB)
- Responsive Design

---

## 🚀 Funcionalidades principales

- Catálogo filtrable dinámicamente (por JS).
- Sistema de carrito con persistencia en localStorage.
- Página de producto con selección de talla, cantidad y galería.
- Modales de vista rápida / agregar al carrito.
- Footer con info corporativa, medios de pago y newsletter.

---

## 💡 Ideas innovadoras (mejoras vs. sitio real de Chevignon)

| Funcionalidad innovadora                 | Descripción                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| ⭐ **Asistente de estilo con IA**        | Un pequeño chatbot que recomienda prendas por clima, ocasión o estilo.     |
| 📏 **Guía de tallas personalizada**     | Usuarios ingresan sus medidas y se sugiere la mejor talla.                 |
| 💬 **Valoraciones reales + reseñas**    | Sistema de calificación y opiniones con fotos subidas por usuarios.        |
| 👁️‍🗨️ **Vista rápida inteligente**       | Modal flotante con animación, info rápida y botón de "ver más" o "comprar".|
| 🧠 **Modo sugerencia**                  | Si un producto está agotado, se muestran recomendaciones similares.        |
| 📦 **Seguimiento visual del pedido**   | Timeline animado de envío y entrega (tipo Uber Eats o Rappi).              |
| 🕶️ **Probar productos en realidad aumentada (futuro)** | Integración con WebAR para ver cómo luce una chaqueta o camisa puesta.     |

---

## 🛠️ Instalación local (sin servidor backend aún)

```bash
git clone https://github.com/tu-usuario/ecommerce-chevignon.git
cd ecommerce-chevignon
# Abrir con Live Server o navegador directamente
```

---

## 📦 Versión futura con backend (ideas)

- Integrar con Firebase (auth + Firestore + storage)
- Crear API con Express o Spring Boot
- Manejo de inventario y compras reales
- Dashboard para administrador

---

## ✍️ Créditos e inspiración

- Inspirado en: [chevignon.com.co](https://www.chevignon.com.co/)
- Diseño por: [Tu nombre o marca personal]
- Frontend 100% desarrollado a mano
