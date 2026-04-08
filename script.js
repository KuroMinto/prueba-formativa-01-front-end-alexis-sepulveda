const hero = document.querySelector('.hero');
const main = document.querySelector('main');

// Función para contraer automáticamente en scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hero.classList.add('collapsed');
    // Calcular la altura del hero contraído y ajustar el padding del main
    setTimeout(() => {
      main.style.paddingTop = hero.offsetHeight + 'px';
    }, 300); // Esperar a que termine la transición
  } else {
    hero.classList.remove('collapsed');
    main.style.paddingTop = '0';
  }
});