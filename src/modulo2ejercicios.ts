// 1. Declaración explícita de strings

let peliculaFavorita: string = "El Padrino";
// peliculaFavorita = 1999; // ❌ Error: El tipo 'number' no es asignable al tipo 'string'.

// 2. Números y decimales

let temperatura: number = 20.5;
let edad: number;
edad = 32;

// 3.La inferencia de tipos

let esLunes = false;

// 4. Template Strings (Backticks)

let mensje = `La temperatura es de ${temperatura} grados.`;
console.log(mensje);

// 5. El peligroso 'any'

let cajonDesastre: any = "Hola";
cajonDesastre = 100;
cajonDesastre = true;

// 6. Arrays básicos

let diasSemana: string[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
];
// diasSemana.push(12); // ❌ Error: El tipo 'number' no es asignable al tipo 'string'.

// 7. Tuplas

let coordenadas: [number, number, string] = [40, -3, "Madrid"];

// 8. Arrays con unión de tipos

let respuestas: (string | boolean)[] = ["Si", true, "No", false];

respuestas.push("Quizás");

console.log(respuestas);

// 9. Funciones void

function mostrarAlerta(mensaje: string): void {
  alert(mensaje);
}

// 10. Unknow

let entradaUsuario: unknown = "Soy un texto";

//entradaUsuario.length; // ❌ Error: El tipo 'unknown' no tiene la propiedad 'length'.

if (typeof entradaUsuario === "string") {
  console.log(entradaUsuario.length); // ✅ Correcto
}

// 11. Unión de tipos en Funciones

function procesarInput(entrada: string | number) {
  if (typeof entrada === "string") {
    console.log("Entrada como texto: " + entrada.toUpperCase());
  } else if (typeof entrada === "number") {
    console.log("Entrada como número y *2: " + entrada * 2);
  }
}

procesarInput("Hola Mundo");
procesarInput(42);

// 12. Arrays multidimensionales

let tablero: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "X", "O"],
];

console.log(tablero);

// 13. Tuplas para devolver múltiples valores

function obetenerUsuario(): [string, number] {
  return ["Alice", 30];
}

let usuario = obetenerUsuario();
console.log(usuario[0]); // Alice
console.log(usuario[1]); // 30

// 14. La trampa del 'any' implícito

function sumar(a: number, b: number) {
  return a + b;
}

// 15. Filtrando Arrays con tipado

let lista: (string | number)[] = [1, "dos", "cuatro"];
// let soloNumeros = lista.filter((item): item is number => typeof item === "number"); // ✅ Correcto, solución rápida

console.log(lista);

let soloNumeros: number[] = [];

lista.forEach((item) => {
  if (typeof item === "number") {
    soloNumeros.push(item);
  } else {
    // soloNumeros.push(item); // ❌ Error: no puedes meter strings aquí
  }
});

console.log(soloNumeros);

// 16 El error de "posiblemente undefined"

const invitados: string[] = ["Ana", "Juan"];
// const longitud = invitados[5].length; // ❌ Error: El índice 5 puede ser undefined

// Forma segura
const longitud = invitados[5]?.length; // ✅ Correcto, longitud será undefined si el índice no existe
console.log(longitud);

// 17. Unknown al rescate (Parseo de JSON)

let respuestaJson: unknown = '{"nombre": "Luis", "edad": 25}';

// Debemos asegurar que es string antes de parsear
if (typeof respuestaJson === "string") {
  const usuarioParseado = JSON.parse(respuestaJson); // JSON.parse devuleve any por defecto
  console.log(usuarioParseado);
}

// 18. Tuplas opcionales

let tuplaRGBA: [r: number, g: number, b: number, a?: number];

tuplaRGBA = [255, 0, 0]; // Sin alpha
tuplaRGBA = [255, 0, 0, 0.5]; // Con alpha

console.log(tuplaRGBA);

// 19. Void vs Return

function logMensaje(): void {
  // return true; // ❌ Error: No se puede devolver un valor en una función void
}

function esVerdad(): boolean {
  return true; // ✅ Correcto.
}

// 20. Objetos simples (Adelanto a interfaces)

const perro = { nombre: "Firulais", edad: 5 };
perro.edad = 6; // ✅ Correcto
// perro.raza = "Labrador"; // ❌ Error: La propiedad 'raza' no existe en el tipo '{ nombre: string; edad: number; }'.

console.log(perro);

// 21. Tipos literales (Literal Types)

let direccion: "arriba" | "abajo" | "izquierda" | "derecha";

// direccion = "diagonal"; // ❌ Error: No es un valor permitido
direccion = "arriba"; // ✅ Correcto

console.log(direccion);

// 22. Arrays de solo Lectura (inmutabilidad)

let constantes: readonly number[] = [3.14, 9.8];
//constantes.push(1.6); // ❌ Error: No se puede modificar un array de solo lectura
// constantes[0] = 0; // ❌ Error: No se puede modificar un array de solo lectura
console.log(constantes);

// 23. El tipo never (ComprobaciónExhaustiva)

function errorCritico(mensaje: string): never {
  throw new Error(mensaje);
  // Aquí el código muere. Nunca se llega a una línea siguiente.
}


// 24. Type Assertions (Mentirle a TypeScript)

let dato: unknown = "soy un string)";

// let longitud: number = dato.length; // ❌ Error: 'unknown' no tiene propiedad 'length'
{
// Le decimos a TS: "Confía en mí, sé que ahora mismo esto es un string"
let longitud: number = (dato as string).length;
}

// 25. Control Flow Analysis (Estrechamiento de tipos)

function analizar(valor: string | number | boolean){
  if (typeof valor === "string") {
    return "Texto";
  } else if (typeof valor === "number"){
    return "numero";
  } else {
    // Pasa el mouse sobre 'valor' aquí:
    // VS Code te dirá: (parameter) valor: boolean
    return "Booleano";
  }
}

// 26. Strict Null Checks (El error del billón de dólares)

function buscarEmail(id: number): string | null {
  if (id === 1) return "juan@gmail.com";
  return null;
}

let email = buscarEmail(2);
// console.log(email.toUpperCaese()); // ❌ Error: 'email' puede ser null
if (email){
  console.log(email.toUpperCase()); // ✅ Correcto
}

 email = buscarEmail(1);
if (email){
  console.log(email.toUpperCase()); // ✅ Correcto
}

// 27. DESTRUCTURING CON TIPADO

const cancion = {titulo: "Yesterday", anio: 1965};

// Sintaxis correcta para tipar destructurin inline:
const { titulo, anio}: { titulo: string; anio: number} = cancion;

// Muchos intentan esto (que es erróneo, porque esto renombra la variable, no la tipa):
// const {titulo: string, anio: number} = cancion; // MAL

// 28. EL TIPO object (con 'o' minúscula)

let contenedor: object;

// contenedor = 5; // ERROR (primitivo)
// contenedor = "texto" // ERROR (primitivo)
contenedor = []; // Correcto (Array es objeto JS)
contenedor = {}; // Correcto
contenedor = {id: 1}; // Correcto

console.log(contenedor);


// 29. Tuplas con etiquetas (Labeled Tuples)

let respuestaHttp: [codigo: number, mensaje: string] = [404, "Not found"];
// Al usarlo, no cambia la lógica, pero ayuda a la docmentación.

// 30. Tipado "Inline" de Objetos Anidados

let biblioteca: []