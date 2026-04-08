const hero = document.querySelector('.hero');
const main = document.querySelector('main');

// Al cargar, ajustar el padding del main para la navbar fija
document.addEventListener('DOMContentLoaded', () => {
  main.style.paddingTop = hero.offsetHeight + 'px';
});