const cambioFondo = document.getElementById('fondo');

cambioFondo.addEventListener('change', cambiarColor);

function cambiarColor() {
    let color = document.getElementById('fondo').value;
    if (color === 'rojo') {
        document.getElementById('cuerpo').style.background = 'red';
    } else if (color === 'amarillo') {
        document.getElementById('cuerpo').style.background = 'yellow';
    } else if (color === 'aqua') {
        document.getElementById('cuerpo').style.background = 'aqua';
    } else if (color === 'salmon') {
        document.getElementById('cuerpo').style.background = 'salmon';
    } else if (color === 'blanco') {
        document.getElementById('cuerpo').style.background = 'white';
    }
}