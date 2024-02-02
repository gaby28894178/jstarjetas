//! DEMO ECMA PARTE 2
//? 2.1 this
//* La palabra this en JS se refiere al objeto que está ejecutando el código actual. En otras palabras, this hace referencia al objeto que está a la izquierda del punto o al objeto mas cercano que esta envolviendo al metodo. Por ejemplo:
/* const person = {
  name: 'Bob',
  printName: function() {
    return this.name;
  }
};
console.log(person.printName()); // ???? */
//* En este caso, this hace referencia al objeto person, ya que es el objeto que está envolviendo a printName, dicho de otra manera, el objeto que esta a la izquierda del punto es person.
//TODO Sin embargo, si se hace lo siguiente:
/* const printName = person.printName;
console.log(printName()); // ???? */
//* En este caso, this hace referencia al objeto global, ya que no hay ningún objeto a la izquierda del punto.
//TODO Para solucionar esto, se puede usar el método bind, que permite cambiar el valor de this. Por ejemplo:
/* const printName = person.printName.bind(person);
console.log(printName()); // ???? */
//* En este caso, this hace referencia al objeto person, ya que se le pasó como parámetro al método bind.

//? 2.2 arrow functions
//* Las arrow functions son una forma más corta de escribir funciones en JS. Tienen un return implícito, por lo que en algunas ocasiones no es necesario escribir la palabra return. Además, las arrow functions son funciones anónimas, por lo que no tienen nombre. Si se quiere guardar la función en una variable, se puede hacer de la siguiente manera:
/* // function sum(a, b) {
//   return a + b;
// }
// let sum = (a, b) => a + b;
// console.log(sum(1, 2));  */

//* Además, si la función recibe un solo parámetro, no es necesario escribir los paréntesis. Por ejemplo:
/* // function isPositive(number) {
//   return number >= 0;
// }
// let isPositive = number => number >= 0;
// console.log(isPositive(-1)); */

//* Otro ejemplo un poco mas practico:
//* Si se quiere filtrar un array, se puede hacer de la siguiente manera:
/* // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filtered = numbers.filter(function(number) {
//   return number % 2 == 0;
// });
// let filtered = numbers.filter(number => number % 2 == 0);
// console.log(filtered); */

//* Las arrow functions no tienen su propio this, sino que toman el valor del this del ambito en el que son creadas. Por ejemplo, en una declaracion de una funcion normal:
/* function ejemploFuncion() {
  console.log(this); // ????
}
ejemploFuncion();  */
//TODO En este caso, this hace referencia al objeto global, ya que la función no está siendo envuelta por ningún objeto.

//* Sin embargo, si se hace lo siguiente:
/* const person = {
  name: 'Bob',
  printName: function() {
    console.log(this); // ????
  }
};
person.printName(); */
//TODO En este caso, this hace referencia al objeto person, ya que la función está siendo envuelta por el objeto person.

//* Ahora, usando una arrow function:
/* const ejemploArrowFunction = () => {
  console.log(this); // ????
};
ejemploArrowFunction(); */
//TODO En este caso, this hace referencia al objeto global, ya que la arrow function no tiene su propio this.

//* Veamos que pasa si se hace lo siguiente:
/* const person = {
  name: 'Bob',
  printName: () => {
    console.log(this); // ????
  }
};
person.printName(); */
//TODO En este caso, this sigue haciendo referencia al objeto global.
//* Existe una manera de que el this con arrow funcione, es medio raro, pero se puede hacer lo siguiente:
/* const person = {
  name: 'Bob',
  printName: function() {
    const self = this; // Guardar el valor de this en una variable
    return () => self.name; // Usar la variable en la arrow function
  }
};
console.log(person.printName()) // ????
const getName = person.printName();
console.log(getName()); // ???? */

//! Esto del this con arrow functions es un poco confuso, por lo que se recomienda no usar arrow functions para los métodos de un objeto.

//* Ademas, si te preguntas para que sirve generar un this en el metodo de un objeto, seria para poder herear el metodo a otro objeto, por ejemplo:
/* const person = {
  name: "Bob",
  printName: function () {
    return this.name;
  },
};
const person2 = {
  name: "Alice",
};
person2.printName = person.printName; */
//TODO En esa linea estamos creado un metodo printName en el objeto person2, que es igual al metodo printName del objeto person
// console.log(person.printName()); // ????
// console.log(person2.printName()); // ????

//TODO Antes de hablar de clases y herencias, hablemos y entendamos bien objetos y prototipos
//? 2.3 Objetos
//* Los objetos pueden tener propiedades y métodos. Esto es bastante claro a esta altura.
//* Siempre decimos en JavaScript que todo es un objeto o puede ser tratado como un objeto, entendamos esto por medio de los prototipos:
//? 2.3.1 Prototipos
//* Cada objeto en JavaScript tiene un enlace interno a otro objeto llamado su "prototipo".
//* Cuando intentas acceder a una propiedad o método de un objeto, JavaScript busca primero en el propio objeto y luego en su prototipo.
//* Si el prototipo también tiene un prototipo, este proceso continúa a lo largo de la cadena de prototipos hasta que se encuentra la propiedad o método deseado o hasta que se llega al final de la cadena de prototipos (donde el prototipo es null).
//TODO El objeto prototype es un objeto que tienen todas las funciones, y que se usa para agregar métodos a las funciones constructoras.
//* Este concepto es muy importante en JavaScript porque los objetos pueden heredar propiedades y métodos de sus prototipos.
//* Por ejemplo, si se quiere agregar un método a todos los objetos, se puede hacer de la siguiente manera:
/* const person = {
  name: 'Bob'
};
Object.prototype.printName = function() {
  console.log(this.name);
}
person.printName(); // ???? */
//* En este caso, el método printName se agrega al prototipo de Object, por lo que todos los objetos tienen acceso a ese método.
/* const person2 = {
  name: 'Alice'
};
person2.printName(); // ???? */

//? 2.3.2 Funciones constructoras
//* Las funciones constructoras son una forma de crear objetos en JS. Estas funciones tienen un this, que hace referencia al objeto que se está creando.
//* El this de una función constructora es publico, por lo que se puede acceder desde afuera de la función constructora.
//* Para crear un objeto a partir de una función constructora, se usa la palabra new. Por ejemplo:

/* function Person(name) {
  this.name = name;
}
Person.prototype.printName = function() {
  console.log(this.name);
};

Person.prototype.sayHi = () => {
  console.log(`Hola, soy ${this.name}`);
};
/* const person = new Person('Bob');
person.printName(); // ????
person.sayHi(); // ????  */

//TODO Como se puede ver, el this de la arrow function no funciona, ya que no tiene su propio this, sino que toma el valor del this del ambito en el que es creada, en este caso, el objeto global.

//? 2.3.3 Herencia prototipica
//* La herencia prototipica es un mecanismo que tienen los objetos en JS, que permite agregar métodos a los objetos.
//* Para lograr la herencia en JavaScript, puedes vincular un objeto a otro como su prototipo.
//* Esto se hace asignando un objeto como prototipo de otro objeto utilizando la propiedad __proto__ o el método Object.create().
//* Cuando intentas acceder a una propiedad o método en un objeto y no lo encuentra, JavaScript buscará en su prototipo. Por ejemplo:
/* // Función constructora
function Animal(nombre) {
  this.nombre = nombre;
}

// Método en el prototipo de Animal
Animal.prototype.saludar = function() {
  return `Hola, soy ${this.nombre}`;
};

// Crear instancia de Animal
const perro = new Animal('Fido');

// Crear un nuevo objeto basado en Animal como su prototipo
const gato = Object.create(Animal.prototype); */
//TODO la diferencia entre Object.create y new es que Object.create no ejecuta el constructor de Animal, por lo que no se le pasa el nombre al gato.

// console.log(gato.saludar()); // ????
// gato.nombre = 'Whiskers';

// Llamar al método saludar
// console.log(perro.saludar()); // ????
// console.log(gato.saludar());  // ????

//? 2.4 clases
//* Las clases son una forma de crear objetos en JS, estas tienen un constructor, que es un método que se ejecuta cuando se crea una instancia de esa clase.
//* El this de una clase es publico, por lo que al crear una instancia, se pueden ver las propiedades de inicializacion de la clase. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
  // la diferencia entre los metodos de una clase y los metodos de una funcion constructora es que los metodos de una clase no se agregan al prototipo de la clase, sino que se agregan al prototipo de la clase padre, en este caso, el prototipo de Object.
  printName() {
    return this.name;
  }
  sayHi = () => {
    return `Hola, soy ${this.name}`;
  }
  // Como se puede ver, el this de la arrow function funciona, ya que no tiene su propio this, sino que toma el valor del this del ambito en el que es creada, en este caso, la clase Person.
}
const person = new Person('Bob');
// console.log(person.printName()); // ????
// console.log(person.sayHi()); // ???? */

//? 2.5 Herencia de clases
//* La herencia de clases es un mecanismo que tienen las clases en JS, que permite agregar métodos a las clases.
//* Para lograr la herencia en JavaScript, puedes extender una clase a otra utilizando la palabra extends.
//* Cuando intentas acceder a una propiedad o método en una clase y no lo encuentra, JavaScript buscará en su clase padre. Por ejemplo:
/* class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}
class Perro extends Animal {
  constructor(nombre) {
    super(nombre);
    this.raza = 'Labrador';
  }
  ladrar() {
    return 'Guau!';
  }
}
const perro = new Perro('Bolt');
// console.log(perro)
// console.log(perro.saludar()); // ???? */

//? 2.6 Metodos estaticos
//* Los métodos estáticos son métodos que se pueden llamar sin crear una instancia de la clase.
//* Para crear un método estático, se usa la palabra static. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
  static create(name) {
    return new Person(name);
  }
}
const person = Person.create('Bob');
console.log(person.name); // ???? */

//? 2.7 Getters y setters
//* Los getters y setters son métodos que se usan para obtener y establecer el valor de una propiedad.
//* Para crear un getter o setter, se usa la palabra get o set. Por ejemplo:
/* class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}
const person = new Person('Bob');
console.log(person.name); // ????
person.name = 'Alice';
console.log(person.name); // ???? */

//TODO En este caso, la propiedad name es privada, ya que tiene un _ antes del nombre, pero se puede acceder a ella mediante el getter y el setter.
//? 2.8 Propiedades computadas
//* Las propiedades computadas son propiedades que se calculan en tiempo de ejecución.
//* Para crear una propiedad computada, se usa corchetes. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
  [Symbol.toStringTag] = 'Persona';
}
const person = new Person('Bob');
console.log(person.toString()); // ???? */

//? 2.9 Propiedades privadas
//* Las propiedades privadas son propiedades que solo se pueden acceder desde dentro de la clase.
//* Para crear una propiedad privada, se usa #. Por ejemplo:
/* class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
const person = new Person('Bob');
console.log(person.name); // ????  
console.log(person.getName()); // ???? */
//TODO la diferencia entre definir una propiedad privada con _ y con # es que con # no se puede acceder a la propiedad desde afuera de la clase, ni siquiera con el getter y el setter.

//? 2.10 Propiedades estaticas privadas
//* Las propiedades estáticas privadas son propiedades que solo se pueden acceder desde dentro de la clase.
//* Para crear una propiedad estática privada, se usa #. Por ejemplo:
/* class Person {
  static #name;
  static setName(name) {
    this.#name = name;
  }
  static getName() {
    return this.#name;
  }
}
Person.setName('Bob');
console.log(Person.getName()); // ???? */

//? 2.11 Propiedades privadas computadas
//* Las propiedades privadas computadas son propiedades que solo se pueden acceder desde dentro de la clase.
//* Para crear una propiedad privada computada, se usa #. Por ejemplo:
/* class Person {
  #name = 'Bob';
  [Symbol.toStringTag] = 'Persona';
  getName() {
    return this.#name;
  }
}
const person = new Person();
console.log(person.toString()); // ???? */

//? 2.12 Propiedades estaticas privadas computadas
//* Las propiedades estáticas privadas computadas son propiedades que solo se pueden acceder desde dentro de la clase.
//* Para crear una propiedad estática privada computada, se usa #. Por ejemplo:
/* class Person {
  static #name = 'Bob';
  static [Symbol.toStringTag] = 'Persona';
  static getName() {
    return this.#name;
  }
}
console.log(Person.toString()); // ???? */

//? 2.13 Mixins
//* Los mixins son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
}
class PersonMixin {
  printName() {
    console.log(this.name);
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person('Bob');
person.printName(); // ???? */

//? 2.14 Mixins con herencia
//* Los mixins con herencia son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
}
class PersonMixin extends Person {
  printName() {
    console.log(this.name);
  }
}
const person = new PersonMixin('Bob');
person.printName(); // ???? */

//? 2.15 Mixins con herencia multiple
//* Los mixins con herencia multiple son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person('Bob');
person.printName(); // ???? */

//? 2.16 Mixins con herencia multiple y super
//* Los mixins con herencia multiple y super son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  constructor(name) {
    this.name = name;
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person('Bob');
person.printName(); // ???? */

//? 2.17 Mixins con herencia multiple y super con propiedades privadas
//* Los mixins con herencia multiple y super con propiedades privadas son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super con propiedades privadas, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.#name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.#name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person('Bob');
person.printName(); // ???? */

//? 2.18 Mixins con herencia multiple y super con propiedades privadas computadas
//* Los mixins con herencia multiple y super con propiedades privadas computadas son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super con propiedades privadas computadas, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  #name = 'Bob';
  constructor() {
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.#name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.#name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person();
person.printName(); // ???? */

//? 2.19 Mixins con herencia multiple y super con propiedades privadas computadas y estaticas
//* Los mixins con herencia multiple y super con propiedades privadas computadas y estaticas son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super con propiedades privadas computadas y estaticas, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  static #name = 'Bob';
  constructor() {
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.#name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.#name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person();

person.printName(); // ???? */

//? 2.20 Mixins con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters
//* Los mixins con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  static #name = 'Bob';
  constructor() {
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.#name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.#name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person();

person.printName(); // ???? */

//? 2.21 Mixins con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters y metodos estaticos
//* Los mixins con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters y metodos estaticos son una forma de agregar funcionalidad a una clase.
//* Para crear un mixin con herencia multiple y super con propiedades privadas computadas y estaticas y getters y setters y metodos estaticos, se crea una clase normal y se usa la palabra extends. Por ejemplo:
/* class Person {
  static #name = 'Bob';
  constructor() {
  }
}
class PersonMixin1 {
  printName() {
    console.log(this.#name);
  }
}
class PersonMixin2 {
  printName2() {
    console.log(this.#name);
  }
}
class PersonMixin extends PersonMixin1, PersonMixin2 {
  printName() {
    super.printName();
  }
}
Object.assign(Person.prototype, PersonMixin);
const person = new Person();

person.printName(); // ???? */
