// Seleccionamos con"Type Casting" porque necesitamos leer el .value
var inputUsuario = document.getElementById("usuario");
// Seleccionamos ek botón. Usamos ! porque estamos seguros de que existe.
var btnSaludar = document.getElementById("btn-saludar");
// Seleccionamos el párrafo donde escribiremos
var parrafoMensaje = document.getElementById("mensaje");
// Añadimos un evento (esto lo veremos a fondo en el 7.2)
btnSaludar === null || btnSaludar === void 0 ? void 0 : btnSaludar.addEventListener("click", function () {
    // Leemos el valor (TS sabe que existe .value gracias al `as`)
    var nombre = inputUsuario.value;
    // Escribimos en el HTML
    parrafoMensaje.innerText = "\u00A1Hola, ".concat(nombre, "! Bienvenido al DOM con TS.");
});
