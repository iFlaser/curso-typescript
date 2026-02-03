/*
Paso 1: El Modelo de Datos (Interface)
Primero, definimos qué forma tiene una tarea. Esto es el contrato que usarán nuestros datos.
*/

import { GestorDeTareas } from "./GestorDeTareas.js";


/*
Paso 2: La Lógica de Negocio (Clase)
Crearemos la clase que administrará el estado. 
Usaremos encapsulamiento (private) para proteger la lista de tareas y evitar que se modifique desde fuera sin permiso.
*/

// Instanciamos la clase
const miGestor = new GestorDeTareas();

// PROBAMOS LA APLICACIÓN

// 1. Intentamos agregar una tarea vacía (debería fallar)
miGestor.agregarTarea("");

// 2. Agregamos tareas válidas
miGestor.agregarTarea("Aprender TypeScript");
miGestor.agregarTarea("Hacer la compra");
miGestor.agregarTarea("Pasear al perro");

// 3. Listamos para ver qué IDs se generaron
miGestor.listarTareas();

// NOTA: Copia un ID de la consola al ejecutarlo para probar el siguiente paso.
// Como usamos Date.now(), los IDs cambiarán en cada ejecución.
// Aquí simularemos que completamos la primera tarea accediendo "internamente"
// (en un caso real, obtendrías el ID de la interfaz gráfica).

// Truco para obtener el ID de la primera tarea para el ejemplo:
// (Esto es solo para probar, normalmente el usuario te da el ID)
// No te preocupes si no entiendes esta línea 'any', es solo para el test.
const idParaPrueba = (miGestor as any).tareas[0].id;

// 4. Marcamos como completada
miGestor.marcarCompletada(idParaPrueba);

// 5. Intentamos marcar una que no existe
miGestor.marcarCompletada(999);

// 6. Listamos nuevamente para ver el resultado final
miGestor.listarTareas();

miGestor.eliminarTarea(idParaPrueba);
miGestor.listarTareas();
