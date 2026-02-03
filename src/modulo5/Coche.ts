class Coche{
  // 1. Propiedades (el estado)
  // Es el método que se ejecuta automáticamente al hacer "new Coche"
  marca: string;
  modelo: string;
  encendido: boolean;
  
  // 2. Constructor
  // Es el método que se ejecuta automáticamente al hacer "new Coche()"
  constructor(marca: string, modelo: string){
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false; // Valor por defecto
  
  }

  // 3. Métodos (EL COMPORTAMIENTO)
  arrancar(): void {
    this.encendido = true;
    console.log("brruuuumm! El coche ha arrancado.")
  }
}

// USO:
const miCoche = new Coche("Toyota", "Corolla");
miCoche.arrancar();