var estudiantes = ["Miguel", "Daniella", "Rosa", "Sergio"];

//EJEMPLO 1 DE FOR
//Inicializar una variable de i
//Mientras "i < array.length" la tarea se va a ejecutar
function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//OTRO EJEMPLO DEL FOR
//FOR OF; Se debe inicializar una variable en singular de nuestro array que esta en plural
//Mientras sigan habiendo elementos en nuestro array en plurarl se va a seguir ejecutando la tarea
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


