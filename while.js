// Se declaran las notas en la variable notas
var notas = ["Do", "Re", "Mi", "Fa", "Sol"];


// Se declara la funcion entonarNotas todos los elementos de la variable notas como argumento
// Devuelve mensaje con cada elemento cuando es llamada la funcion
function entonarNotas(nota){
    console.log(`Entonando, ${nota}`);
}

while (notas.length > 0) {
    console.log(notas);
    // Shift() va  a ir sacando elementos del array cada que se cumple un loop
    var nota = notas.shift();
    entonarNotas(nota);
}