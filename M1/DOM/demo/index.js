//! El DOM (Document Object Model) es una representación jerárquica y estructurada de un documento HTML o XML que se carga en el navegador.
//! Es una interfaz de programación que permite a los desarrolladores manipular la estructura, el contenido y el estilo de un documento web de manera dinámica mediante lenguajes como JavaScript.

//? Como carga los archivos el navegador?
//* DOM -> Es la representacion del HTML
//* CSSOM -> Es la representacion de los estilos en el navegador.
//* Render Tree -> Es el renderizado, se hace visible el HTML y CSS.
//* Layout -> Determina el cuadro o marco donde se va a pintar. Prepara el contenido a la pantalla que va a renderizar.
//* Painting -> Renderiza y pinta el contenido en la pantalla.

//? DOM API -> API viene de Application Programming Interface, es una caja de herramientas, otorga metodos ya construidos para facilitar el desarrollo.

const myClass = document.getElementsByClassName("myClass");
// console.log("myClass: ", myClass);

const myClass2 = document.querySelector(".myClass2");
// console.log("myClass2: ", myClass2);

const h1 = document.getElementById("demo");
// console.log(h1)

const h1Query = document.querySelector("#demo");
// console.log(h1Query)

const form = document.getElementsByTagName("form");
console.log("form: ", form);

const input = document.querySelector("input");
// console.log("input: ", input);

const inputs = document.querySelectorAll("input");
// console.log("input: ", inputs);

const fullName = document.querySelector("#full_name");
// console.log("full_name: ", fullName);

const username = document.querySelector("#username");
// console.log("username: ", username);

const nickname = document.querySelector("#nickname");
// console.log("nickname: ", nickname);

const submit = document.querySelector("#submit");
// console.log("submit: ", submit);

document.addEventListener("DOMContentLoaded", function () {
  // console.log("hola");
});

document.addEventListener("mousemove", function () {
  // console.log("moviste el mouse");
});

document.addEventListener("keydown", function () {
  // console.log("Presionaste una tecla");
});

let obj = {
  fn: "felipe",
  usrn: "jhgj",
  nk: "jhg",
};

//? Vamos a crear un card con los datos que el usuario ingrese en el formulario

const card = document.createElement("div"); // <div></div>
// todo el document es manipuble porque es un objeto
card.className = "card"; // <div class="card"></div>

const cardFullName = document.createElement("img"); // <h2></h2>
// cardFullName.innerText = fullName.value; // <h2>Nombre Completo</h2>

const cardUserName = document.createElement("p"); // <p></p>
// cardUserName.innerText = `Username: ${username.value}`; // <p>Username: username</p>

const cardNickname = document.createElement("p"); // <p></p>
// cardNickname.innerText = `Nickname: ${nickname.value}`; // <p>Nickname: nickname</p>

// <div class="card"></div>
card.appendChild(cardFullName);
// <div class="card">
//  <h2>Nombre Completo</h2>
// </div >
card.appendChild(cardUserName);
// <div class="card">
//  <h2>Nombre Completo</h2>
//  <p>Username: username</p>
// </div >
card.appendChild(cardNickname);
// <div class="card">
//  <h2>Nombre Completo</h2>
//  <p>Username: username</p>
//  <p>Nickname: nickname</p>
// </div >

console.log("card: ", card);

submit.addEventListener("click", function (event) {
  console.log(event);
  event.preventDefault();
  cardFullName.innerText = fullName.value;
  cardUserName.innerText = `Username: ${username.value}`
  cardNickname.innerText = `Nickname: ${nickname.value}`;
  console.log(card)
  document.body.appendChild(card)
  /* console.log(event);
   event.preventDefault();
    console.log("Full Name: ", fullName.value);
    console.log("Username: ", username.value);
    console.log("Nickname: ", nickname.value); */
});
