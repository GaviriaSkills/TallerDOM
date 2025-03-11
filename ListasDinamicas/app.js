const listaTareas = document.getElementById('lista-tareas');
const formulario = document.getElementById('formulario');
const inputTarea = document.getElementById('input-tarea');
const botonAgregar = document.getElementById('boton-agregar');
const tareas = document.getElementsByClassName('tareas');

// Agregar tarea
let nuevaTarea = function() {
    const item = document.createElement('li');
    item.classList.add('tarea');
    item.innerHTML = `
        <p>${inputTarea.value}</p>
        <button class="boton-eliminar">Eliminar</button>
    `;

    // Eliminar tareas
    const botonEliminar = item.querySelector('.boton-eliminar');
    botonEliminar.addEventListener('click', function() {
        item.remove();
        console.log('Tarea eliminada');
    });

    listaTareas.appendChild(item);
}

botonAgregar.addEventListener('click', function(event) {
    event.preventDefault();
    nuevaTarea();
    console.log('Tarea agregada');
    inputTarea.value = '';
});