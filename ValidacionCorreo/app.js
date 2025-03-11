const form = document.getElementById('myForm');
const email = document.getElementById('email');
const error = document.createElement('p');
error.style.color = 'red';

form.appendChild(error);

// Validar el correo electrónico
email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    error.textContent = '¡Debe ser un correo electrónico!';
  } else {
    error.textContent = '';
  }
});

// mostrar y olcultar contraseña
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('change', function (event) {
    if (togglePassword.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});