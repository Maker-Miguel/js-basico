// YA SABES LOS LOOPS, 
// YA PUEDES CONTRUIR UN OBJETO 
// Y YA PUEDES ESTILIZAR UNA FUNCION CONSTRUCTORA

// PODRIAS GENERAR UNA FUNCION CONSTRUCTORA Y 
// HACER UN LOOP PARA CREAR UNA LISTA DE 30 CARROS
// QUE SE VAYAN CONSTRUYENDO SOLOS???




// TEMPLATE CREACION DE CARROS - FUNCION CONSTRUCTORA
function auto(i, brand, model, year, color) {
    this.i = i ++;
    this.id = i,
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}

console.log(auto.length)

var auto1 = new auto(i, "Toyota", "Corolla", 2021, "blanco")


// BUCLE: Mientras menor a 30 elementos, crear un nuevo auto
while (i < 30) {
    console.log
}
