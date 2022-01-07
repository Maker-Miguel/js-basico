//Los arrays son estructura o lista de datos que guardan ciertos valores
//Tienen estructura entre []
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
//(4) ['Manzana', 'Platano', 'Cereza', 'Fresa']

console.log(frutas.length)
//4

console.log(frutas[0])
//'Manzana'
console.log(frutas[2])
//Cereza

//.push va a agregar elemento al final del array
var masFrutas = frutas.push("Uvas");
frutas
//(5) ['Manzana', 'Platano', 'Cereza', 'Fresa', 'Uvas']
console.log(frutas[4]);
//Uvas

//.pop va a eliminar elemento del array
var ultimo = frutas.pop("Uvas")
//(4) ['Manzana', 'Platano', 'Cereza', 'Fresa']

//.unshift va agregar elemento al array al inicio
var nuevaLongitud = frutas.unshift("Uvas");
frutas
//(5) ['Uvas', 'Manzana', 'Platano', 'Cereza', 'Fresa']

//Borra primer elemento del array
var borrarFruta = frutas.shift("Uvas");


//Conocer la posicion de un elemento en el array
var posicion = frutas.indexOf("Cereza");