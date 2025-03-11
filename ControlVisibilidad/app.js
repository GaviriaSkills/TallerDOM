const irArriba = document.getElementById('ir-arriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    irArriba.style.display = 'block';
  } else {
    irArriba.style.display = 'none';
  }
});

irArriba.addEventListener('click', () => {
  window.scrollTo({top: 0,
    behavior: 'smooth'});
});