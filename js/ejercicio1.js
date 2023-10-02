var nombre = prompt("Introduce tu nombre y apellidos");

//Apartado 1
function contarLongitud() {
  var contador = 0;

  for (var i = 0; i < nombre.length; i++) {
    if (nombre[i] == " ") {
      contador++;
    }
  }

  return nombre.length - contador;
}

console.log(contarLongitud());

//Apartado 2
console.log(nombre.toLocaleLowerCase());

//Apartado 3
console.log(nombre.toLocaleUpperCase());

//Apartado 4
function dividirNombre() {
  var array = nombre.split(" ");
  console.log(array);

  for (var i = 0; i < array.length; i++) {
    switch (i) {
      case 0:
        console.log("Nombre: " + array[i]);
        break;
      case 1:
        console.log("Apellido 1: " + array[i]);
        break;
      case 2:
        console.log("Apellido 2: " + array[i]);
        break;
    }
  }
}

dividirNombre();

//Apartado 5
function inicialesUno() {
  var array = nombre.split(" ");
  var iniciales = " ";

  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      iniciales += array[i].slice(0, 2);
    } else {
      iniciales += array[i].charAt(0);
    }
  }

  return iniciales.toLocaleLowerCase();
}

console.log(inicialesUno());

//Apartado 6
function inicialesDos() {
  var array = nombre.split(" ");
  var iniciales = " ";

  for (var i = 0; i < array.length; i++) {
    iniciales += array[i].slice(0, 2);
  }

  return iniciales.toLocaleLowerCase();
}

console.log(inicialesDos());

//Apartado 7
function crearContraseña() {
  var array = nombre.split(" ");
  var newNombre = array[0];
  var contraseña = " ";

  for(var i=0;i<newNombre.length;i++){
    contraseña += newNombre.charAt(i);
    contraseña += i;
  }

  return contraseña;

}

console.log(crearContraseña());