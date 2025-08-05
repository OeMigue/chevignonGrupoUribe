let currentStep = 1;
const steps = document.querySelectorAll('.checkout-step');
const progressSteps = document.querySelectorAll('.progress-bar .step');

function mostrarPaso(step) {
  steps.forEach(sec => {
    sec.classList.remove('active');
    if (parseInt(sec.dataset.step) === step) {
      sec.classList.add('active');
    }
  });

  progressSteps.forEach((span, index) => {
    span.classList.toggle('active', index === step - 1);
  });

  // Mostrar botón Finalizar solo en el paso 4
  const btnFinalizar = document.querySelector('.btn-finalizar');
  btnFinalizar.style.display = (step === 4) ? 'block' : 'none';
}

const botonesSiguiente = document.querySelectorAll('.btn-siguiente');
botonesSiguiente.forEach(btn => {
  btn.addEventListener('click', () => {
    // Validación Paso 1
    if (currentStep === 1) {
      const formPaso1 = document.querySelector('#form-paso1');
      if (!formPaso1.checkValidity()) {
        formPaso1.reportValidity();
        return;
      }
    }

    // Validación Paso 2
    if (currentStep === 2) {
      const formPaso2 = steps[1].querySelector('form');
      if (!formPaso2.checkValidity()) {
        formPaso2.reportValidity();
        return;
      }
    }

    // Validación Paso 3 (opcional)
    
    if (currentStep === 3) {
      const metodoSeleccionado = document.querySelector('.payment-option.active');
      if (!metodoSeleccionado) {
        alert("Selecciona un método de pago para continuar.");
        return;
      }
    }
    

    // Avanzar si validaciones pasan
    currentStep++;
    if (currentStep <= steps.length) {
      mostrarPaso(currentStep);

      // Simular estado de envío
      if (currentStep === 4) {
        simularEstadoEnvio();
      }
    }
  });
});

function simularEstadoEnvio() {
  const estado = document.getElementById('estado-envio');
  let estados = ['📦 En preparación...', '🚛 En camino...', '✅ Entregado'];
  let index = 0;

  const intervalo = setInterval(() => {
    estado.textContent = estados[index];
    index++;
    if (index === estados.length) clearInterval(intervalo);
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarPaso(currentStep);
});

// Lógica para desplegar preguntas frecuentes (FAQ)
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = question.classList.contains("active");

      // Cierra todos los ítems
      faqItems.forEach((i) => {
        i.querySelector(".faq-question").classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Si estaba cerrado, lo abre
      if (!isOpen) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// Activar método de pago y mostrar formulario correspondiente
const opcionesPago = document.querySelectorAll(".payment-option");
const seccionesPago = document.querySelectorAll(".payment-info");

opcionesPago.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Eliminar clase activa de todos
    opcionesPago.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Mostrar la sección correspondiente
    const metodo = btn.dataset.method;
    seccionesPago.forEach(seccion => {
      seccion.style.display = (seccion.id === metodo) ? "block" : "none";
    });
  });
});