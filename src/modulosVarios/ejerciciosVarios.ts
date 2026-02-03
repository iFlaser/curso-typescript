const mensaje: string = "Hola desde VS Code";
// Intenta borrar las comills y poner un número para ver como VS Code te subraya en rojo el error.
console.log(mensaje);

let nombre: string = "Ana";
let apellido: string = "Pérez";
let saludo: string = `Hola, mi nombre es ${nombre} ${apellido}`; // Template literal

{
let edad: number = 30;
let altura: number = 1.75;
let temperatura: number = -5;
}
let estaLogueado: boolean = true;
let tienePermisos: boolean = false;

// No le decimos que es 'string', pero TS lo sabe porque le asignamos texto.
let curso = "Curso de TypeScript";

let esFinDeSemana = false;

let ventas: number;

ventas = 1000;

console.log(ventas + 50);

let variableLoca: any = "Soy un texto";

// Como es 'any', TS te deja asignarle un número después
variableLoca = 20;

let variableDesconocida: unknown = "Hola";

// TS te deja asignarle cualquier cosa, igual que any
variableDesconocida = 100;
variableDesconocida = "Ahora soy texto";

// PERO... si intentas usarla, TS te detiene:
// Error: 'variableDesconocida' is of type 'unknow'

// console.log(variableDesconocida.toUpperCase()); // <--- Descomenta para ver el error rojo

// SOLUCIÓN: Tienes que verificar el tipo primero (Type Guard)

if (typeof variableDesconocida === "string") {
  // Aquí dentro TS sabe que es un string y te deja usarlo
  console.log(variableDesconocida.toUpperCase());
}

function saludarConsola(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}

saludarConsola("Fer");

let vacio: undefined = undefined;
let nulo: null = null;

// Ejemplo de seguridad:

let miNumero: number = 10;
// miNumero = null; // Error: El tipo 'null' no es asignable al tipo 'number'

let datoApi: unknown = true;
// console.log(datoApi.toFixed(2));

if (typeof datoApi === "number") {
  console.log(datoApi.toFixed(2));
}

let habilidades: string[] = ["JavaScrip", "TypeScript", "Node.js"];

let puntuaciones: number[] = [10, 5, 8, 9];

// Si intentas meter un intruso, TS se queja:
// habilidades.push(100); // Error: Argument of type 'number' is not assignable to 'string'

let nombres: Array<string> = ["Ana", "Luis", "María"];

let mezcla: (string | number)[] = ["Hola", 100, "Mundo", 500];

// Definimos una tupla: [ID del usuario, Nombre del usuario, ¿Es Admin?]
// El primer elemento DEBE ser number, el segundo string, el tecero boolean.
let usuarioDb: [number, string, boolean] = [1, "Carlos", true];

// Correcto:
usuarioDb[1] = "Pedro";

// Error de Tipo:
// usuarioDb[0] = "Hola"; // Error: El índice 0 espera un número.

// Error de Longitud (fuera de rango):
// usuarioDb[3] = "Algo más"; // Error: La tupla solo tiene 3 elementos.

// Como TS sabe que el índice 1 es un string...
console.log(usuarioDb[1].toUpperCase()); // ✅ Te autocompleta métodos de string.

// Como TS sabe que el índice 0 es un number...
// console.log(usuarioDb[0].toUpperCase()); // ❌ Te marca error, los números no tienen toUpperCase.

//CARRITO DE COMPRAS SIMPLE (EJERCICIO)

let listaDeCompras: string[] = ["Leche", "Pan"];
listaDeCompras.push("Huevos");

let producto: [string, number, number];

producto = ["Zapatillas", 89.99, 2];

console.log(producto[1] * producto[2]);

// Creamos un tipo que puede ser número o string
type IdFlexible = number | string;

let idUsuario: IdFlexible;

idUsuario = 10;
idUsuario = "A-55";
// idUsuario = true; // ERROR! boolean no es ni number ni string

// Solo permitimos estos tres valores exactos
type Talla = "S" | "M" | "L" | "XL";

let camiseta: Talla;

camiseta = "M";

// 1. Definimos la Unión Literal
// Esto limita los valores exactos que puede recibir el tipo
type MetodoContacto = "email" | "telefono";

// 2. Definimos el tipo Contacto (Estructura del objeto)
type Contacto = {
  nombre: string;
  metodo: MetodoContacto;
};

// 3. Creamos la variable
const miContacto: Contacto = {
  nombre: "Fernando",
  // Si escribes "carta" aquí, VS Code te lo subrayará en rojo
  // Error: Type '"carta"' is not assignable to type 'MetodoContacto'.
  metodo: "email",
};

console.log(
  `Contacto: ${miContacto.nombre}, se prefiere usar: ${miContacto.metodo}`,
);

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

// Creamos un objeto que cumple el contrato
const perfil: Usuario = {
  nombre: "Laura",
  edad: 28,
  email: "laura@email.com",
};

// Error: Falta la propiedad 'email'
// const perfilCompleto: Usuario = { nobre: "Pedro", edad: 20}

console.log(perfil.edad);

interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string; // <--- Opcional (puede ser string o undefined)
}

const tableta: Producto = {
  nombre: "iPad",
  precio: 500,
  // No ponemos descripción y TS no se queja, es válido.
};

console.log(tableta);

interface Configuracion {
  readonly idDispositivo: string;
  tema: "oscuro" | "claro";
}

const miConfig: Configuracion = {
  idDispositivo: "A-123-XYZ", // Asignamos valor inicial
  tema: "oscuro",
};

miConfig.tema = "claro"; // Permitido
// miConfig.idDispositivo = "B-999"; // ❌ Error: Cannot assign to 'idDispositivo' because it is a read-only property.

// Se ven casi iguales
interface Perro {
  nombre: string;
}
type Gato = { nombre: string };

interface Cancion {
  readonly id: number;
  titulo: string;
  artista: string;
  album?: string;
}

const miCancion: Cancion = {
  id: 1,
  titulo: "ASD",
  artista: "Judeline",
};

miCancion.album = "Greatest Hits";

console.group(miCancion);

function procesarId(id: string | number) {
  // Aquí "is" es string O number
  // id.toUpperCae(); // ERROR ¡: la propiedad no existe en 'number'

  if (typeof id === "string") {
    // Dentro de estas llaves, TS sabe que 'id' es 100% string.
    console.log("El ID es texto: " + id.toUpperCase());
  } else {
    // Si no entró en el if, TS es tan listo que deduce que 'id' TIENE que ser number.
    console.log("El ID es número: " + id.toFixed());
  }
}

// CASO 1: Pasando un String
// Entrará en el bloque 'if'
procesarId("usuario-X");
// Salida en consola: "El ID es texto: USUARIO-X"

// CASO 2: Pasando un Number
// Entrará en el bloque 'else'
procesarId(456.789);
// Salida en consola: "El ID es número: 457"
// (Nota: .toFixed() sin argumentos redondea al entero más cercano en formato string)

// CASO 3: Pasando una variable
let miIdDeBaseDeDatos: number = 99;
procesarId(miIdDeBaseDeDatos);
// Salida en consola: "El ID es número: 99"

function imprimirNombre(nombre?: string) {
  // nombre es: string | undefined
  // Verificamos si 'nombre' tiene valor (si no es null, undefined, ni vacío)
  if (nombre) {
    // Aquí TS ya sabe que 'nombre' es string (y no undefined)
    console.log("Hola " + nombre.toUpperCase());
  } else {
    console.log("No hay nombre disponible");
  }
}

imprimirNombre("Fer");

// Objetos, es lo mismo. Forma desplegada y forma concnetrada
interface Pez {
  nadar: () => void;
}
interface Pajaro {
  volar: () => void;
}

function moverAnimal(animal: Pez | Pajaro) {
  // Si la propiedad 'nadar existe en 'animal'
  if ("nadar" in animal) {
    animal.nadar(); // TS sabe que es un Pez
  } else {
    animal.volar(); // TS sabe que es un Pajaro
  }
}

let miPez: Pez;

miPez = {
  nadar: () => {
    console.log("El pez está nadando");
  },
};

moverAnimal(miPez);

function transformarDato(input: string | number) {
  // Escribe tu lógica de Type Guard aquí abajo
  if (typeof input === "string") {
    // TS le dejará usar .toUppperCase() aquí
    console.log(`Es texto: ${input.toUpperCase}`);
  }
}

{
  function transformarDato(input: string | number) {
    // Escribe tu lógica de Type Guard aquí abajo
    if (typeof input === "string") {
      // TS te dejará usar .toUpperCase() aquí
      console.log(`Es texto: ${input.toUpperCase()}`);
    } else {
      // TS sabe que esto es number
      console.log(`Es número x2: ${input * 2}`);
    }
  }

  // Pruebas
  transformarDato("hola mundo"); // Debería salir: Es texto: HOLA MUNDO
  transformarDato(50); // Debería salir: Es número x2: 100
}

// function nombre(parametro: TIPO, parametro2: TIPO)
function sumar(a: number, b: number){
  return a+b;
}

sumar(10, 20);

// sumar(10, "Hola"); // ERROR: El argumento "Hola" no es un número.

//               Entradas           Salida esperada
//                  👇                  👇
function duplicar(x: number): number {
    return x * 2;
    // return "Hola"; // ❌ Error: El tipo 'string' no es asignable a 'number'.
}

{
// 1. Definimos el TIPO (La forma de la función)
// "Quiero una función que reciba (number, number) y devuelva (number)"
type OperacionMatematica = (a: number, b: number) => number;

// 2. Creamos las funciones reales 
const sumar: OperacionMatematica = (x, y) => x + y;
const restar: OperacionMatematica = (x, y) => x - y;
const multiplicar: OperacionMatematica = (x, y) => x * y;
const dividir: OperacionMatematica = (x, y) => x / y;

// 3. Intento fallido
// const decirHola: OperacionMatematica = (x, y) => "Hola"; // ❌ Error: El tipo 'string' no es asignable a 'number'.
}

//
// Le decimos expolicitamente: "Esto es un input"
const input = document.getElementById("milInput") as HTMLInputElement;

// Ahora TS sabe que tiene .value y que (si confiamos en el casting) no es null
console.log(input.value); // Correcto

// Sin el !
const titulo = document.getElementById("titulo-principal");
// titulo.style.color = "red"; // ERROR: `titulo`is possibly `null`

// Con el ! (La "exclamacion de confianza")
const tituloSeguro = document.getElementById("titulo-principal")!;
tituloSeguro.style.color = "red"; // Correcto

