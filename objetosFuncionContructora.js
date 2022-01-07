var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//FUNCION CONSTRUCORA
// Es el template que se usara para construir varios objetos
// this. se usa como referencia a la funcion constructora auto(){}
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// El operador new se usara como referencia auto para autoNuevo
var autoNuevo = new auto("Tesla", "Model 3", 2022);
// undefined

autoNuevo
// auto {marca: 'Tesla', modelo: 'Model 3', annio: 2022}

var autoNuevo2 = new auto("Tesla", "Model X", 2019);

var autoNuevo3 = new auto("Toyota", "Corolla", 2021);


autoNuevo3
// auto {marca: 'Toyota', modelo: 'Corolla', annio: 2021}

autoNuevo2
// auto {marca: 'Tesla', modelo: 'Model X', annio: 2019}