export default class Auto{
    marca: string;
    modelo: string;
    año: number;
    siglasPatente: string
    numPatente: number;
    
    constructor(marca: string, modelo: string, año:number, siglasPatente: string, numPatente: number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.siglasPatente = siglasPatente;
        this.numPatente = numPatente;
     }

    }