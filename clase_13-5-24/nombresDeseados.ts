import * as readlineSync from "readline-sync";
let dimensionArreglo:number = readlineSync.questionInt(`Ingrese la dimension del arreglo`);
let nombresDeseados:string []= new Array(dimensionArreglo);
let indice:number;

for(indice = 0; indice < dimensionArreglo; indice++) {
    nombresDeseados[indice]=readlineSync.question(`Ingrese el nombre que quiere poner en el lugar ${indice}:`);

}
for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log(`La persona que ingreso en la posicion ${indice} es: ${nombresDeseados[indice]}`);
}
 