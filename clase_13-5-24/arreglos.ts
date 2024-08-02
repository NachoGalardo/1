//Estructuras de datos homogeneos
//Almacenamiento de determinado numero de datos
//Lista=Array
//El indice comienza en el 0
//Como se define? let "nombre del arrego":tipo []=new Array (<max length>)
import * as readlineSync from "readline-sync";

let meses:string[]=new Array(12);
meses [0]="Enero"
meses [1]="Febrero"
meses [2]="Marzo"
meses [3]="Abril"
meses [4]="Mayo"
meses [5]="Junio"
meses [6]="Julio"
meses [7]="Agosto"
meses [8]="Septiembre"
meses [9]="Octubre"
meses [10]="Noviembre"
meses [11]="Diciembre"

let nroMes : number = readlineSync.questionInt("Indique el numero de mes que quiere saber: ");
let indice : number = nroMes - 1;

console.log("El mes que buscabas es: " + meses[indice]);
