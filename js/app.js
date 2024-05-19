AOS.init();

document.addEventListener("DOMContentLoaded", function (){
   document.getElementById("formI").addEventListener("submit", function(event){
    event.preventDefault();

    resetErrorMessages();

    var email = document.getElementById("emailI").value.trim();
    var password = document.getElementById("contrase").value.trim();
    var isValid = true;

    if (!isValidEmail(email)) {
        displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
        isValid = false;
    }

    if (password.length < 8) {
        displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
        isValid = false;
    }

    if (isValid) {
        alert("¡Formulario enviado correctamente!");
       
    }
   }) 
})
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.innerText = "";
    });
}