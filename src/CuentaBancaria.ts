class CuentaBancaria {
  public titular: string; // Todo el mundo puede verlo
  private saldo: number; // NADIE puede tocarlo desde fuera

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  // Se puede poner el modificador directamente en el constructor:

  // constructor(private saldo: number, oublic titular: strin) {}

  // Método público para interactuar con la propiedad privada
  public depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Saldo actual: ${this.saldo}`);
    }
  }

  // Método para ver el saldo (pero no modificarlo)
  public obtenerSaldo(): number {
    return this.saldo;
  }
}

const miCuenta = new CuentaBancaria("Ana", 1000);

// ERROR TYPESCRIPT
// miCuenta.saldo = 10000;
// "Property 'saldo' is private and only accessible within class 'CuentaBancaria'."
