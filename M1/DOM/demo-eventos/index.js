let arreglo = [1, 2, 3];
let divs = document.querySelectorAll("div");
// coleccion de HTML [0: div "uno", 1: div "dos"]
let div = document.getElementById("uno");
// div -> <div id="uno" class="misma">Uno</div>
// div.id -> "uno"

// Demo console.log
/* document.body.addEventListener("click", function (e) {
        // console.log("hola");
        // console.log(e);
        // console.log(e.target);
      }); */

// Demo clickeaste
/* for (let i = 0; i < divs.length; i++) {
        const element = divs[i]; // Que es element?
        // 1er iteracion -> <div id="uno" class="misma">Uno</div>
        // 2da iteracion -> <div id="dos" class="misma">Dos</div>
        element.addEventListener("click", function (event) {
          // alert("clickeaste");
          // console.log(event)
          alert("clickeaste: " + event.target.innerHTML);
        });
      } */

// Demo Backgrounds
/* divs.forEach(function(element) {
        // element -> <div></div>
        element.addEventListener('click', function(evento) {
          if( evento.target.style.background == 'gray') {
            evento.target.style.background = 'plum';
          } else {
            evento.target.style.background = 'gray';
          }
        })
      }) */

// Demo mouseMove
/* document.body.addEventListener("mousemove", function (e) {
        div.style.position = "fixed";
        div.style.top = e.clientY + 15 + "px";
        div.style.left = e.clientX + 152 + "px";
      }); */

// Demo homework
let count = 4;
/* document.getElementById("add").addEventListener("click", function (e) {
  let nuevoDiv = document.createElement("div");
  // <div ></div>
  nuevoDiv.setAttribute("class", "clase" + count);
  // <div class = "clase4" ></div>
  // nuevoDiv.setAttribute("id", "cualquiera")
  // <div id = "cualquiera" class = "clase4" ></div>
  nuevoDiv.innerText = count;
  // <div id = "cualquiera" class = "clase4" >4</div>
  document.body.appendChild(nuevoDiv);
  // divs = [...divs, nuevoDiv];
  // Array-like -> string
  count++;
}); */
