let cantidad = document.getElementById('cantidad');
let total = document.getElementById('total');
let precio = 5000;

function calcularTotal() {
    total.value = parseInt(cantidad.value) * precio;
    total.textContent = "$" + total.value;
}

cantidad.addEventListener('input', calcularTotal);