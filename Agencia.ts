//import Auto from "./ClaseAutos";
//import { RegistroAutomotor } from "./Funciones";

import * as fs from "fs";
import Auto from "./ClaseAutos";
import RegistroAutomotor from "./Funciones";

let agencia: [] = []
const info = fs.readFileSync("./autos.json", "utf8");
const automoviles = JSON.parse(info)
agencia = automoviles.map((item:any) => item);

//console.log(automoviles)

const registro = new RegistroAutomotor
const renault = new Auto ("Renault", "Kangoo", 2008, "JYT", 679)



registro.consultar("renault", agencia)
