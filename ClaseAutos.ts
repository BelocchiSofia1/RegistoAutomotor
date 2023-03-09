export default class Auto{
    marca: string;
    modelo: string;
    anio: number;
    siglasPatente: string
    numPatente: number;
    
    constructor(marca: string, modelo: string, anio:number, siglasPatente: string, numPatente: number){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.siglasPatente = siglasPatente;
        this.numPatente = numPatente;
     }

    }