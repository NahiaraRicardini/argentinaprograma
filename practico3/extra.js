let rechazados= []
let admitidos = []
let invitados = ["Maria","Juan", "Andres", "Lionel", "Leandro","Emilia","Jose" ,"Sofia" ]
console.log ("La lista de invitados es: " + invitados)


for (let i=0; i<invitados.length; i++){
 let nombre = invitados [i]
  if(nombre === "Jose" || nombre === "Sofia"){
    rechazados.push (nombre);}
    else {
      admitidos.push(nombre);
    }
  }
  for (let i=0; i<invitados.length; i++){
    if(i = rechazados){
      console.log ("La lista ordenada de invitados rechazados es: " + rechazados.sort());
    }
  }
    for (let i=0; i<invitados.length; i++){
      if(i = admitidos){
        console.log ("La lista ordenada de invitados admitidos es: " + admitidos.sort());
      }
    }
    