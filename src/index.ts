// Seleccionamos con"Type Casting" porque necesitamos leer el .value
const inputUsuario = document.getElementById("usuario") as HTMLInputElement;

// Seleccionamos ek botón. Usamos ! porque estamos seguros de que existe.
const btnSaludar = document.getElementById("btn-saludar")!;

// Seleccionamos el párrafo donde escribiremos
const parrafoMensaje = document.getElementById("mensaje")!;

// Añadimos un evento (esto lo veremos a fondo en el 7.2)
btnSaludar?.addEventListener("click", () => {
  // Leemos el valor (TS sabe que existe .value gracias al `as`)
  const nombre = inputUsuario.value;

  // Escribimos en el HTML
  parrafoMensaje.innerText = `¡Hola, ${nombre}! Bienvenido al DOM con TS.`;
});
