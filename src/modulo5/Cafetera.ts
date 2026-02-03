class Cafetera{

    private cafeRestaurante: number;

    constructor(cafeRestaurante: number){
        this.cafeRestaurante = cafeRestaurante;
    }

    servirTaza(): void{
        console.log(`Café disponible: ${this.cafeRestaurante}`);
        this.cafeRestaurante -= 10;
        console.log(`Café restantes: ${this.cafeRestaurante}`);
    }
}

const miCafetera = new Cafetera(100);
miCafetera.servirTaza();
