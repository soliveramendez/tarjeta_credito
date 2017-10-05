function validacion(){
var respuesta = prompt("Ingrese el numero de su tarjeta");//ingreso de número de tarjeta de crédito.
if(respuesta === ""){ //respuesta espacio vacio
alert("Ingrese una opción válida");
}else{
isValidCard();//enlazando con function
    }
return respuesta;//retornando respuesta
}

function isValidCard(respuesta){//validacion de tarjeta de credito
var resultado = 0;
var array = [];//creando array para ingresar los datos
for (var i = 0; i <respuesta.length; i++){//recorre el array
array.unshift(parseInt(respuesta[i]));//invierte los números
if(i%2!==0) //verificando numeros impares
resultado=+respuesta[i];
}
}

}else if (i%2===0);//verificando los numeros impares
if(respuesta[i]*2>10){//si el numero es mayor a 10 se multiplica por 2
  (respuesta[i]-10)+1;//formula para que los numeros del resultado se sumen
  resultado=(respuesta[i]*2);
}
}
return array;//agregar el array modificado
}
}
validacion();//llamo a la función
