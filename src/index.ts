/*
Paso 1: El Modelo de Datos (Interface)
Primero, definimos qué forma tiene una tarea. Esto es el contrato que usarán nuestros datos.
*/

// 1. Definimos la estructura de una Tarea
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

/*
Paso 2: La Lógica de Negocio (Clase)
Crearemos la clase que administrará el estado. 
Usaremos encapsulamiento (private) para proteger la lista de tareas y evitar que se modifique desde fuera sin permiso.
*/

class GestorDeTareas {
  // Propiedad privada: solo la clase puede modificar este array directamente.
  private tareas: Tarea[] = [];

  // Constructor: Inicializamos el array (aunque ya lo hicimos arriba, es buena práctica)
  constructor() {
    this.tareas = [];
  }

  // MÉTODOS ---------------------------------

  // 1. Agregar Tarea
  public agregarTarea(titulo: string): void {
    // Validación simple
    if (titulo === "" || titulo.trim() === "") {
      console.log("Error: El título no puede estar vacío");
      return;
    }
    /*
    titulo === "": Comprueba si el texto está literalmente vacío (longitud 0).
    ||: Es el operador lógico OR (O). La validación pasa si se cumple la izquierda O la derecha.
    titulo.trim() === "": Esta es la parte más importante. El método .trim() elimina los espacios en blanco al principio y al final.
    ¿Por qué se hace? Para evitar que alguien guarde una tarea que sea solo espacios (" "). 
    Sin el .trim(), Git o tu programa aceptarían esos espacios como un título válido.
    */

    const nuevaTarea: Tarea = {
      id: Date.now(), //Usamos la fecha como ID único simple
      titulo: titulo,
      completada: false,
    };

    this.tareas.push(nuevaTarea);
    console.log(`Tarea agregada: ${titulo}`);
  }

  // 2. Marcar como completada
  public marcarCompletada(id: number): void {
    // Buscamos la tarea en el array
    const tareaEncontrada = this.tareas.find((t) => t.id === id);

    // Narrowing: Verificamos si existe anter de usarla
    if (tareaEncontrada) {
      tareaEncontrada.completada = true;
      console.log(`Tarea "${tareaEncontrada.titulo}" marcada como completada.`);
    } else {
      console.log(`ERROR: No se encontró ninguna tarea con el ID: ${id}`);
    }
  }

  // 3. Listar todas las tareas
  public listarTareas(): void {
    console.log("\n--- LISTA DE TAREAS ---");

    if (this.tareas.length === 0) {
      console.log("No hay tareas pendientes. ¡Buen trabajo!");
      return;
    }

    this.tareas.forEach((tarea) => {
      // Operador ternario para mostrar un icono u otro
      const estado = tarea.completada ? "[X]" : "[]";
      console.log(`${estado} ${tarea.titulo} (ID: ${tarea.id})`);
    });
    console.log("------------------\n");
  }

public eliminarTarea(id: number): void {
    for(let i = 0; i < this.tareas.length; i++){
        if(this.tareas[i]?.id === id){
            this.tareas.splice(i, 1);
            console.log(`Tarea con ID ${id} eliminada.`);
            return;
        }
    }
}

}

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