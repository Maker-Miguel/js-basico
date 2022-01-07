
//La condicional en el parentesis debe ser igual a TRUE
    if(true){
        console.log("Hola");
    }
    //Hola
    //undefined

    if(false){
        console.log("Hola");
    }
    //undefined y no imprime el hola

    //Entre parentesis esta lo que se debe validar
    //Si ponemos falso entre parentesis va a devolver el resultado del ELSE
    //Si la validacion tiene mas pasos se usa ELSE IF
    if(true){
        console.log("Hola");
    } else {
        console.log("Resultado Falso");
    }


    //ELSE IF si tiene parentesis por que se puede seguir validando
    //Se pueden utilizar varios else if si es el caso
    //Como else no necesita validar nada no tiene nada entre parentesis
    if (true) {
        console.log("HOLA")
    } else if () {

    } else {

    }


    //EJEMPLO
    var edad = 18;

    if (edad === 18) {
        console.log("Puedes votar, sera tu primera votacion")
    } else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    } else {
        console.log("No puedes votar aun");
    } 

    //EJEMPLO VARIOS ELSE IF
    var edad = 18;

    if (edad === 18) {
        console.log("Puedes votar, sera tu primera votacion")
    } else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    } else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    }else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    }else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    } else {
        console.log("No puedes votar aun");
    } 


    //OPERADOR TERNARIO
    //IF y ELSE en una sola linea
    condition ? true : false;
    //EJEMPLO
    var numero = 1;
    var resultado = numero === 1 ? "Si soy un 1": "No, no soy 1";

    console.log(resultado)
    //Si numero es 1 da el primer resultado, sino da el segundo resultado
    



    //PIEDRA PAPEL O TIJERA
    var op1 = "Piedra";
    var op2 = "Papel";
    var op3 = "Tijera";
    
    var resultado = function(user, cpu){
        if(user != cpu){
            if(user === op1 && cpu === op3){
                console.log("el usuario GANO con "+ op1)
            }else if(user === op2 && cpu === op1){
                console.log( "el usuario GANO con " + op2)
            }else if(user === op3 && cpu === op2){
                console.log("el usuario GANO con " + op3)
            }else{
                console.log("La CPU Gano!!")
            }
        }else if(user === cpu){
            console.log("Empate")
        }
    };
    
    resultado(op1,op3) //el usuario GANO con Piedra```