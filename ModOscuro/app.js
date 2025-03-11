const boton = document.getElementById("checkbox");

boton.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});