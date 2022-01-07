

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre:"TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// .find()
// Hayar articulo estricamente igual al parametro dado
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// Si Laptop esta en el array me lo devuelve, sino no devuelve nada
// Genera un nuevo array
encuentraArticulo


//.forEach();
// No genera un nuevo array, solo hace filtrado del array original sin modificarlo
// Me va a regresar cosas, en este caso el nombre de los articulos
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// .some();
// Se va a generar un nuevo array
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos
// true