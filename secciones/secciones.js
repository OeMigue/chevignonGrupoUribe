/* seccion 1 */


/* const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("atras");
const nextBtn = document.getElementById("siguiente");
let index = 0;
const totalSlides = track.children.length;
    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }); */

/* seccion 2 */


/* 
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

    next.addEventListener('click', () => {
        index = (index + 1) % 2; // 2 slides
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + 2) % 2;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }); */


/* para las dos secciones */


document.addEventListener("DOMContentLoaded", function () {
    // Buscar todos los carouseles
    document.querySelectorAll("[data-carousel]").forEach(carousel => {
        const track = carousel.querySelector("[data-track]");
        const btnPrev = carousel.querySelector("[data-prev]");
        const btnNext = carousel.querySelector("[data-next]");

        let index = 0; 
        const slides = track.children;
        const totalSlides = slides.length;

        function updateCarousel() {
            const slideWidth = carousel.clientWidth;
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        btnNext.addEventListener("click", () => {
            index = (index + 1) % totalSlides;
            updateCarousel();
        });

        btnPrev.addEventListener("click", () => {
            index = (index - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        window.addEventListener("resize", updateCarousel);
    });
});