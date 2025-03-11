const cargarContenido = document.getElementById('cargarContenido');
const contenido = document.getElementById('contenido');

cargarContenido.addEventListener('click', () => {
    contenido.innerHTML = 'Cargando...';
    setTimeout(() => {
        contenido.innerHTML = 'Contenido cargado <br>';
        const image = document.createElement('img');
        image.src = './pc.jpg';
        image.width = '600';
        contenido.appendChild(image);
    }, 2000);
});