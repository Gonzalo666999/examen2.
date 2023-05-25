// 5En el archivo script.js muestra en consola los tipos (typeof) de las siguientes variables: 🚩


let uno = true;
console.log(typeof uno) //boolean
let dos = "2";
console.log(typeof dos)  // string
let tres = 3;
console.log(typeof tres)//number
let cuatro = null;
console.log(typeof cuatro) // object
let cinco;
console.log(typeof cinco) //ndefined
let seis = {numero: 6};
console.log(typeof seis)  //object
let siete = [7];
console.log(typeof siete)  // object

// 6 En el archivo script.js declara las siguiente variables: nombreProducto, precio, direccionEnvio, país y costoEnvio en una sola línea y asignar los valores correspondiente. 🚩

let nombreProducto = "play3";
let precio = 2200;
let direccionEnvio = "cochabamba";
let país = "Bolivia";
let costoEnvio = 50;

console.log(nombreProducto, precio, direccionEnvio, país, costoEnvio)


//7    Declare una variable llamada libreria y asígnele el valor inicial React es una biblioteca Javascript de código abierto creada por Facebook., en el archivo script.js. 🚩

let libreria = "React es una biblioteca Javascript de código abierto creada por Facebook."


// 8  Mostrar la longitud de la variable libreria

console.log(libreria)

//  9 Cambiar la frase React es una biblioteca por ReactNative es un framework, luego mostrar el resultado en consola. 🚩


let frase = "React es una biblioteca Javascript de código abierto creada por Facebook";

console.log(frase.replace("React es una biblioteca", "ReactNative es un framework,"));



// 10 1️⃣0️⃣ De la variable libreria, utilizar los métodos aprendidos (concat, toLowerCase, etc...)para mostrar en consola el siguiente resultado: 🚩
//REACT es una BIBLIOTECA JavaScript de CÓDIGO ABIERTO CREADA por FACEBOOK.
letlibreia2 = libreria.replace("Javascript" , javaS)


// 11  Divide la cadena en la coma y cámbiala a una matriz. 🚩

let compañias = "TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI";

console.log(compañias.split(", "));




// 12  Mostrar en consola de tipo error el código ASCII de la letra R
let error = "R";
console.error(error.charCodeAt(0));
// 13 Mostrar en consola 4 veces la siguiente frase: HOLA MUNDO. 🚩


let frase1 = "HOLA MUNDO"

console.log(frase1.repeat(4));

// 14  Mostrar en consola con el siguiente formato el mensaje: 🚩
 console.log('Hola estudio "Sistema" y estoy llevando la materia de:   PROGRAMACION 1 Turno: Noche En el grupo 2"')  



// 15 Mostrar en consola un número random entre 25 y el 50. 🚩


let numero = Math.floor(Math.random(25) *50)

console.log(numero);



// 16 Mostrar en consola el caracter que se encuentra en la posicion 8 de la variable libreria

console.log(libreria.indexOf(8));  // es un espacio en blanco

// 17 Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio. El resultado mostrar en la consola de tipo advetencia


let cadenaJava = "JavaScript";
let indiceAleatorio = Math.floor(Math.random() * cadenaJava.length);
let caracterAleatorio = cadenaJava.charAt(indiceAleatorio);

// 18  Convertir los siguientes valores: 🚩
let valor1 = 9.8
let valor2 = -5
let valor3 = 62
let valor4 = "28"
let valor5 = "15.65" 

let entero1 = Math.floor(valor1);
console.log(entero1); 

let absoluto = Math.abs(valor2);
console.log(absoluto); 

let cadenaT = valor3.toString();
console.log(cadenaT); 

// Convertir a número entero
let entero2 = parseInt(valor4);
console.log(entero2); 

// Convertir a número decimal
let decimal = parseFloat(valor5);
console.log(decimal); 





// 19 let conjunto = [4, 8, 16, 18, -52, -3, -1, 7];

let maximo = Math.max.apply(Math, conjunto);
let minimo = Math.min.apply(Math, conjunto);

console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);


// 20 Muestra el valor máximo y mínimo del siguiente conjunto de número

let num1 = 9.78
let num2 = 5.20
let num3 = 1.64
let num4 = 5.7
let num5 = 3.23   

let num1 = 9.78;
let num2 = 5.20;
let num3 = 1.64;
let num4 = 5.7;
let num5 = 3.23;

let redondeoHaciaArriba1 = Math.ceil(num1);
let redondeoHaciaAbajo1 = Math.floor(num1);
let redondeoHaciaArriba2 = Math.ceil(num2);
let redondeoHaciaAbajo2 = Math.floor(num2);
let redondeoHaciaArriba3 = Math.ceil(num3);
let redondeoHaciaAbajo3 = Math.floor(num3);
let redondeoHaciaArriba4 = Math.ceil(num4);
let redondeoHaciaAbajo4 = Math.floor(num4);
let redondeoHaciaArriba5 = Math.ceil(num5);
let redondeoHaciaAbajo5 = Math.floor(num5);
console.log("Redondeo hacia arriba de num1:", redondeoHaciaArriba1);
console.log("Redondeo hacia abajo de num1:", redondeoHaciaAbajo1);
console.log("Redondeo hacia arriba de num2:", redondeoHaciaArriba2);
console.log("Redondeo hacia abajo de num2:", redondeoHaciaAbajo2);
console.log("Redondeo hacia arriba de num3:", redondeoHaciaArriba3);
console.log("Redondeo hacia abajo de num3:", redondeoHaciaAbajo3);
console.log("Redondeo hacia arriba de num4:", redondeoHaciaArriba4);










