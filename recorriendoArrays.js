

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre:"TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// FILTER> Filtra cosas especificas del array principal, generando un nuevo array

articulosFiltrados
// Devuelve 2 articulos que su costo es menor o igual a 500 pesos

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
// MAP> Mapea todo el contenido del array y nos devuelve el campo que estamos buscando

nombreArticulos
//Devuelve el nombre de todos los articulos
