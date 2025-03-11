let image = document.getElementById('imagen');

image.addEventListener('mouseover', () => {
    image.src = './jordan1.jpg';
    image.style.transform = 'scale(1.2)';
    image.style.transition = 'transform 1s';
});

image.addEventListener('mouseout', () => {
    image.src = './AirForce1.jpg';
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 1s';
});