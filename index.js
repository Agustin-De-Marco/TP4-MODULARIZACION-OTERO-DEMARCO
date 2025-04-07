const ej1 = require("./modules/ej1");
const ej2 = require("./modules/ej2");
const ej3 = require("./modules/ej3");
const ej4 = require("./modules/ej4");
const ej5 = require("./modules/ej5");
const ej6 = require("./modules/ej6");
const ej7 = require("./modules/ej7");

// EJ 1

ej1("hola","arbol");

// EJ 2

ej2.sumar(1,2);
ej2.restar(1,2);
ej2.multiplicar(1,2);
ej2.dividir(1,2);

// EJ 3

let alumno = new ej3("felipe",1);
alumno.mostrarDatos();

// EJ04

ej4("./entrada.txt", "./salida.txt");

// EJ05

let obj1 = ej5("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log("Ej5:", obj1);

// EJ06

let obj2 = ej6("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log("Ej6:", obj2);

// EJ07

let moneda = ej7("AR");
console.log(moneda);