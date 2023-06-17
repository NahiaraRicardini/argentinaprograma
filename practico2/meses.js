const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingrese número de mes: ');

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let mes = meses [num - 1];
let cantidadDeDias

if ( num === "1" ||num ===  "3" ||num ===  "5" ||num === "7" ||num === "8" || num === "10" ||num === "12"){
  cantidadDeDias = 31;
} else if ( num=== "4" ||num===  "6" ||num === "9" ||num === "11") {
  cantidadDeDias = 30;
}    else { cantidadDeDias = 28;
   }

    console.log ("La cantidad de días del mes de " + mes + " es " + cantidadDeDias);


