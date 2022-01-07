//CORECION: La forma de cambiar de un tipo de valor a otro tipo de valor
//IMPLICITA> El lenguaje nos ayuda a cambiar el tipo de valor
//EXPLICITA> Nosotros obligamos el cambio de tipo de valor


//IMPLICITA
    var a = 4 + "7";
    //undefined

    typeof a
    //"string"

    var b = 4 * "7";
    //undefined

    typeof b
    //"number"

//EXPLICITA
    var a = 20;
    var b = a + "";
    //undefined
    
    console.log(b);
    //20
    //undefined

    typeof b;
    //"string"

    var c = String(a);
    //undefined

    typeof c;
    //"string"

    console.log(c);
    //20

    var d = Number(c);
    //undefined

    typeof d;
    //"number"
