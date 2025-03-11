const imagenes = [
    './imagenes/ferdinand-stohr-woYNcuQ2BLg-unsplash.jpg',
    './imagenes/pelayo-arbues-6FlQ_TIbFkk-unsplash.jpg',
    './imagenes/pexels-franco-monsalvo-252430633-29388434.jpg',
    './imagenes/pexels-jose-david-cortes-326723098-13830862.jpg',
    './imagenes/mono.jpeg',
];

const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
const imagen = document.querySelector('.imagen');

let position = 0;

function next() {
    if (position >= imagenes.length - 1) {
        position = 0;
    } else {
        position++;
    }
    mostrarImagen();
}

function previous() {
    if (position <= 0) {
        position = imagenes.length - 1;
    } else {
        position--;
    }
    mostrarImagen();
}

function mostrarImagen() {
    imagen.src = imagenes[position];
}

botonSiguiente.addEventListener('click', next);
botonAnterior.addEventListener('click', previous);
mostrarImagen();