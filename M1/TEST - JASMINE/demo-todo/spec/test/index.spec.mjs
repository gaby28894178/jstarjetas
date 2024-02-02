// const ToDoList = require("../../src/index.js");
import ToDoList from "../../src/index.mjs";
// toDoList

//? 1. Debe ser una clase
//? Debe tener los metodos:
//*  - getTodos: Retorna la lista de tareas
//*  - addTodo: Agrega una tarea a la lista
//*  - deleteTodo: Elimina una tarea de la lista

describe("true", function () {
  it("true debe ser true", function () {
    expect(true).toBeTruthy();
  });
});


describe("Test para la clase toDoList", function () {
  let toDoList;

  beforeEach(function () {
    toDoList = new ToDoList();
  });

  it("Debe ser una clase", function () {
    expect(toDoList).toBeInstanceOf(ToDoList);
  });

  it("Debe tener el metodo getTodos", function () {
    expect(toDoList.getTodos).toBeDefined();
  });

  it("Debe tener el metodo addTodo", function () {
    expect(toDoList.addTodo).toBeDefined();
  });

  it("Debe tener el metodo deleteTodo", function () {
    expect(toDoList.deleteTodo).toBeDefined();
  });

  it("El metodo getTodos debe retornar un array", function () {
    expect(Array.isArray(toDoList.getTodos())).toBeTruthy();
  });

  it("El metodo addTodo debe agregar un elemento al array", function () {
    let toDo = "Hacer la tarea";
    toDoList.addTodo(toDo);
    expect(toDoList.getTodos().length).toBe(1);
  });
  it("El metodo deleteTodo debe eliminar un elemento del array", function () {
    let toDo = "Hacer la tarea";
    let toDo2 = "Hacer la tarea 2";
    toDoList.addTodo(toDo);
    toDoList.addTodo(toDo2);
    toDoList.deleteTodo();
    expect(toDoList.getTodos().length).toBe(1);
  });
});
