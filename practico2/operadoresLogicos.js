const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingrese un número entero: ');

if (num >0 && num%2===0){
    console.log("El número es positivo y par")}
    else if ((num >0 && num%2 !==0)){
console.log("El número es positivo e impar")}
else if (num<0)
{console.log("El número es negativo")
    }
   else { console.log("El número es cero")}