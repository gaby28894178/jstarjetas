//! DEMO ECMA PARTE 1

//? 1.1 let y const

//* LET es la forma de declarar variables en JS desde ES6 en adelante y reemplaza a var en la mayoría de los casos. Permite crear variables que solo existen en el scope donde fueron declaradas. A esto se le llama scope de bloque.

//* CONST es la forma de declarar variables que no van a cambiar su valor en el tiempo, es decir, son constantes. También tienen scope de bloque.

//* VAR es la forma de declarar variables en JS antes de ES6. No tiene scope de bloque, por lo que las variables declaradas con var existen en todo el scope de la función donde fueron declaradas.

// TODO Veamos algunos ejemplos:

/* var nombre = "Feli";
let edad = 25;
let email = "mail@mail.co";
const string = "un string"; */

// email = email + "m";
// console.log(email);
// string = "otro string";
// console.log(string);

/* if (edad > 18) {
  // nombre = "Felipe";
  // console.log(nombre); // ????
  // edad = edad + 10;
  // console.log(edad); // ????
  // var nombre = "Daniel";
  // console.log(nombre); // ????
  // let edad = 26;
  // console.log(edad); // ????
  // console.log(string);
  // const string = "hola";
  // console.log(string); // ????
  // string = "chao" 
  // console.log(string); // ????
} */

// console.log(nombre); // ????
// console.log(edad); // ????
// console.log(email); // ????

//? 1.2 hoisting
//* Hoisting es el comportamiento que tienen las variables declaradas con var de ser movidas al inicio del scope donde fueron declaradas. Esto quiere decir que podemos acceder a una variable antes de que esta sea declarada, pero su valor será undefined.

//? 1.2.1 hoisting con var
/* console.log(nombre); // ???? 
// var nombre = "Juan";
// let nombre = "Juan";
console.log(nombre);  */ // ????

//? 1.2.2 hoisting con funciones
// saludar();
// function saludar() {
//   console.log("Hola, " + nombre + ".");
// }
// var nombre = "Juan";

//? 1.3 object literals

//* Object literals en JavaScript se refiere a la forma de crear objetos de manera directa y concisa, utilizando la notación de llaves {}. Aquí tienes un ejemplo de cómo se utiliza:

//?? Object Literal
/* let persona = {
  nombre: "Juan",
  edad: 30,
}; */

//?? without object literal
/* let otraPersona = new Object();
otraPersona.nombre = "Juan";
otraPersona.edad = 30; */

//* Una acotacion es que podemos abreviar la creacion de objetos cuando la propiedad y el valor tienen el mismo nombre, por ejemplo:

/* let nombre = "Juan";
let edad = 30;
let persona2 = {
  nombre,
  edad,
}; */

//* Esto es muy utilizado cuando creamos objetos en funciones, por ejemplo:
/* function crearPersona(nombre, edad) {
  let persona = {
    nombre,
    edad,
  };
  return persona;
} */

//* También podemos utilizar variables para crear propiedades de un objeto, por ejemplo:
/* let nombrePropiedad = "nombre";
let valorPropiedad = "Juan";
let persona3 = {
  [nombrePropiedad]: valorPropiedad,
}; */

//* Además, podemos utilizar funciones como valores de las propiedades de un objeto, lo que conocemos como metodos, por ejemplo:
/* let persona4 = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log("Hola, " + this.nombre + ".");
  },
}; */

//? 1.4 template strings o template literals
//* Template strings es una forma de concatenar strings en JavaScript utilizando backticks `` y la sintaxis ${variable} para insertar variables dentro de un string. Por ejemplo:
/* let nombre = "Juan";
let edad = 30;
// console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); */

//? 1.5 destructuring
//* Destructuring es una forma de extraer valores de un objeto o un arreglo y asignarlos a variables. Por ejemplo:

//? 1.5.1 destructuring con objetos
/* let persona = {
    nombre: "Juan",
    edad: 30,
};
// console.log(persona);
// console.log(nombre); // ????
// console.log(edad); // ????
let { nombre, edad } = persona;
// console.log(persona);
// console.log(nombre); // ????
// console.log(edad); // ???? */

//? 1.5.2 destructuring con arreglos
/* let numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[0]); // ????
// console.log(numeros[1]); // ????

let [uno, dos, tres, cuatro, cinco] = numeros;
// console.log(numeros);
// console.log(uno); // ????
// console.log(dos); // ???? */

//? 1.6 spread y rest operator
//? 1.6.1 spread operator
//* Spread operator es una forma de expandir (desempaquetar) elementos de un arreglo o un objeto. Por ejemplo:

//? 1.6.1.1 spread operator con objetos
/* let persona = {
  nombre: "Juan",
  edad: 30,
};
let persona2 = { ...persona };
persona2.nombre = "Daniel";
// console.log(persona); // ????
// console.log(persona2); // ???? */

//? 1.6.1.2 spread operator con arreglos
/* let numeros = [1, 2, 3, 4, 5];
let numeros2 = [...numeros, 6, 7, 8, 9, 10];
// console.log(numeros); // ????
// console.log(numeros2); // ???? */

//? 1.6.2 rest operator
//* Rest operator es una forma de agrupar (empaquetar) elementos de un arreglo o un objeto. Por ejemplo:
//? 1.6.2.1 rest operator con objetos
/* let persona = {
  nombre: "Juan",
  edad: 30,
  email: "mail@mail.com",
};
let { nombre, ...resto } = persona;
// console.log(nombre); // ????
// console.log(resto); // ????
// console.log(persona); // ???? */

//? 1.6.2.2 rest operator con arreglos
/* let numeros = [1, 2, 3, 4, 5];
let [uno, dos, ...resto] = numeros;
// console.log(uno); // ????
// console.log(dos); // ????
// console.log(resto); // ????
// console.log(numeros); // ???? */

//? 1.7 default parameters
//* Default parameters es una forma de asignar valores por defecto a los parametros de una función. Por ejemplo:
/* function saludar(nombre = "Juan") {
  console.log("Hola, " + nombre + ".");
}
// saludar("Daniel");
// saludar(); */

//? 1.8 default assignment
//* Default assignment es una forma de asignar valores por defecto a las propiedades de un objeto o una variable. Por ejemplo:
/* let x = 1;
let y = x || 2;
console.log(y); */

/* let persona = {
  nombre: "Juan",
  edad: 30,
};
let { nombre, edad, email = "mail@mail.com" } = persona;  */

//? 1.9 nullish coalescing operator (??)
//* Nullish coalescing operator es una forma de asignar valores por defecto a las propiedades de un objeto o una variable, pero solo si estas son null o undefined. Por ejemplo:
/* let x = 1;
let y = x ?? 2;
console.log(y); */