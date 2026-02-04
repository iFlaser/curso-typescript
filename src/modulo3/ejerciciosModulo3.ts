// 1. Tu primer Type Alias
type Puntos = number;

let score: Puntos = 100;

// 2. Tu primera interfaz
interface Coche {
    marca: string;
    anio: number;
}

const miCoche: Coche = {
    marca: 'Toyota',
    anio: 2022
}

// 3. Union Types (La opción A o B)
type Resultado = string | boolean;
let respuesta: Resultado;
respuesta = "Correcto";
respuesta = true;
// respuesta = 3; // Error

// 4. Literal Types (Valores exactos)
type ColorSemaforo = 'rojo' | 'amarillo' | 'verde';
let luzActual: ColorSemaforo;
luzActual = 'rojo';
// luzActual = 'azul'; // Error

// 5. Propiedades Opcionales

interface Persona {
    nombre: string;
    telefono?: string;
}

let persona1: Persona = {
    nombre: 'Juan'
}
let persona2: Persona = {
    nombre: 'Maria',
    telefono: '123456789'
}

// 6. Readonly (No tocar)
interface Configuracion {
    readonly apiKEy: string;
}

let configuracion: Configuracion = {
    apiKEy: '123456789'
}

// let configuracion: Configuracion = {apiKEy: '123456789'}. // Es lo mismo

// configuracion.apiKEy = '987654321'; // Error


// 7. Usando un Type dentro de una interfaz
type Categoria = 'fisico' | 'digital';

interface Producto {
    nombre: string;
    tipo: Categoria;
}

let producto: Producto = {nombre:"Mesa", tipo: 'fisico'};

8. Array de Interfaces