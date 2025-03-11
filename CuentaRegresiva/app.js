let contdown = document.getElementById('contador');
let tiempo = 10;

let intervalo = setInterval(() => {
    tiempo--;
    contdown.innerHTML = tiempo;
    if (tiempo === 0) {
        contdown.innerHTML = '¡Feliz Año Nuevo!';
        clearInterval(intervalo);
    }
}, 1000);