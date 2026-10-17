

document.addEventListener("DOMContentLoaded", () => {
 
  const elementos = document.querySelectorAll(
    ".hero-content, .hero-image, .sobre, .card, .cta"
  );

  elementos.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((el) => observador.observe(el));
  } else {
    // Navegadores antigos: mostra tudo direto
    elementos.forEach((el) => el.classList.add("visivel"));
  }
});
