class Activity { 
    constructor({ id, title, description, imgUrl }) {
        console.log(id)
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl =imgUrl
    }
}

class Repository {
    constructor() {
        this.activities = []
        this.id = 0
    }
    getAllActivities() {
        return this.activities
    }
    createActivity(act) {
        this.id++
        const activity = new Activity({ ...act, id: this.id })
        this.activities.push(activity)
    }
    deleteActivity(id) { 
        const filtered = this.activities.filter(act => act.id !== id)
        this.activities = filtered
    }
}

const repository = new Repository()

function buildActivity(activity) {
    // activity -> Activity {id, title, description, imgUrl}

    const { id, title, description, imgUrl } = activity
    // habilitando -> variables
    const h3 = document.createElement("h3")
    h3.innerText = title
    const p = document.createElement("p");
    p.innerText = description
    const img = document.createElement("img");
    img.src = imgUrl
    const card = document.createElement("div")
    card.className = "card"
    card.id = id
    card.appendChild(h3)
    card.appendChild(p)
    card.appendChild(img);
    return card
    // <div div class="card" id="4">
    //     <h3>title</h3>
    //     <p>descriptioon</p>
    //     <img src="url">
    // </div>
}

function buildActivities() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const activities = repository.getAllActivities();
  // activities -> [{id,title,description,imgUrl}, {id,title,description,imgUrl},{id,title,description,imgUrl}]
  const activitiesHTML = activities.map((act) => buildActivity(act));
  // activitiesHTML -> [<div><h3></h3><p></p><img></div>, <div><h3></h3><p></p><img></div>, <div><h3></h3><p></p><img></div>]
  activitiesHTML.forEach((actHTML) => container.appendChild(actHTML));
}

const buttonSubmit = document.querySelector("#add")

function handleClick () { 
    // capturando los inputs
    const title = document.getElementById("title")
    const description = document.getElementById("description")
    const imgUrl = document.getElementById("imgUrl");
    // extrayendo los valores
    const valueTitle = title.value // ""
    const valueDesciption = description.value
    const valueImgUrl = imgUrl.value
    // validacion
    if (!valueTitle || !valueDesciption || !valueImgUrl) {
        alert("Debes llenar todos los campos")
        return
    }
    // creo / encapsulo la info
    const activity = {
        title: valueTitle,
        description: valueDesciption,
        imgUrl: valueImgUrl
    }
    // creando la instancia
    repository.createActivity(activity)
    // Actualizo la pantalla
    buildActivities()
    // vaciar los inputs
    title.value = ""
    description.value = ""
    imgUrl.value = ""
}

// buttonSubmit.addEventListener("click", handleClick )

const form = document.getElementById("form")

form.addEventListener("submit", function (event) { 
    event.preventDefault()
    handleClick()
})

/* const obj = {
  title: "Activity 1",
  description: "Description 1",
  imgUrl: "https://via.placeholder.com/150",
};
console.log(repository)
repository.createActivity(obj)
console.log(repository);
repository.createActivity(obj);
console.log(repository);
repository.createActivity(obj);
console.log(repository);
repository.createActivity(obj);
console.log(repository.getAllActivities())
repository.deleteActivity(2)
repository.deleteActivity(3)
repository.deleteActivity(4)
repository.deleteActivity(1);
console.log(repository.getAllActivities()); */pi
