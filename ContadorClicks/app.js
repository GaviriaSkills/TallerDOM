const btn = document.getElementById('btn');
const clicks = document.getElementById('counter');
let contador = 0;

btn.addEventListener('click', () => {
  contador++;
  clicks.innerHTML = contador;
});