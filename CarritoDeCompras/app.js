const agregarAlCarrito = document.querySelectorAll('.agregar');
const carritoContenedor = document.querySelector('.carrito-productos');
const totalElemento = document.querySelector('.total');

let total = 0;

function agregarProductoAlCarrito(event) {
    const item = event.target.closest('.producto');
    const itemTitulo = item.querySelector('.producto-titulo').textContent;
    const itemPrecio = item.querySelector('.producto-precio').textContent.replace('$', '').trim();

    const nuevoItem = document.createElement('li');
    nuevoItem.classList.add('producto-carrito');
    nuevoItem.innerHTML = `
        <h4 class="producto-titulo-carrito">${itemTitulo}</h4>
        <p class="producto-precio-carrito">$${itemPrecio}</p>
        `;

    carritoContenedor.appendChild(nuevoItem);

    total += parseInt(itemPrecio);
    totalElemento.textContent = `Total: $${total}`;

}

agregarAlCarrito.forEach((boton) => {
    boton.addEventListener('click', agregarProductoAlCarrito);
});