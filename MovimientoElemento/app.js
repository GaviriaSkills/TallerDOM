const movimiento = {
    element: document.getElementById('jugador'),
    topPosition: 0,
    leftPosition: 0,
    pasos : 25,};

movimiento.move = function (direction) {
    switch (direction) {
        case 'ArrowUp':
            this.topPosition -= this.pasos;
            break;
        case 'ArrowDown':
            this.topPosition += this.pasos;
            break;
        case 'ArrowLeft':
            this.leftPosition -= this.pasos;
            break;
        case 'ArrowRight':
            this.leftPosition += this.pasos;
            break;
        default:
            break;
    }
    this.element.style.top = this.topPosition + 'px';
    this.element.style.left = this.leftPosition + 'px';
};

window.addEventListener('keydown', (event) => {
    movimiento.move(event.key);
});