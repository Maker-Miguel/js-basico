// var objeto = {}; Esto es un objeto

// Este objeto ya tiene mas detalles
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//El metodo "${this.)" hace referencia a su objeto padre

miAuto.detalleDelAuto();
// Auto Corolla 2020

miAuto.marca
// 'Toyota'

miAuto.annio
//2020