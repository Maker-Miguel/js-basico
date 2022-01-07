//El SWITCH tambien hace validaciones pero de distintos casos
//Se valida caso por caso hasta que cumpla la condicion y llegue a su respectivo break;
//Si no se tiene el break, hace todas las validaciones y las considera como true a todas
//El break rompe la validacion y devuelve el resultado que nos 
//El SWITCH se utiliza cuando tenemos multiples casos a evaluar y queremos evitar el uso de muchos else if
var numero = 1;

switch (numero) {
  case 1: 
    console.log("Soy uno!");
    break;
  case 10:
    console.log("Soy un 10!");
    break;
  case 100:
    console.log("Si, soy un 100!");
    break;
  default:
    console.log("No soy ninguno de los casos anteriores");
}
