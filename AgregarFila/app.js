const formulario = document.getElementById('formulario');
let tabla = document.getElementById('tbody');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${nombre}</td>
    `;
    tabla.appendChild(fila);
    formulario.reset();
});