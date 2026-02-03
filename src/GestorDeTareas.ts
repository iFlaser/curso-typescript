// 1. Definimos la estructura de una Tarea
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

export class GestorDeTareas {

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
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i]?.id === id) {
        this.tareas.splice(i, 1);
        console.log(`Tarea con ID ${id} eliminada.`);
        return;
      }
    }
  }
}
