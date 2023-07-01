function obtenerJugadaComputadora(){
    let opciones = ["piedra", "papel", "tijeras"]
    let seleccion = Math.floor(Math.random ()* 3)
return opciones [seleccion]}

function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
    const jugadaUsuario = readlineSync.question('Ingrese su elección: ');
    let opciones = ["piedra", "papel", "tijeras"]
  return opciones [(jugadaUsuario.toLowerCase())-1]}

let jugadaComputadora = obtenerJugadaComputadora ();
let jugadaUsuario = obtenerJugadaUsuario();


function determinarGanador(jugadaComputadora, jugadaUsuario){
if (jugadaComputadora === jugadaUsuario) {
    return "empate";
} else if(
    (jugadaUsuario=== "piedra" && jugadaComputadora=== "tijera") || 
    (jugadaUsuario=== "tijera" && jugadaComputadora=== "papel") ||
    (jugadaUsuario=== "papel" && jugadaComputadora=== "piedra")
){
    return "Gana el usuario";
} else {
    return "Gana la computadora";
}
}

let resultado = determinarGanador (jugadaComputadora,jugadaUsuario)

console.log ("La computadora eligió: " + jugadaComputadora)
console.log ("El usuario eligió: " + jugadaUsuario)
console.log ("El resultado fue: " + resultado)