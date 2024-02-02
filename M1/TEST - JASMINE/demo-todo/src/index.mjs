class toDoList {
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    deleteTodo() {
        this.todos.pop();
    }
}

export default toDoList;
// module.exports = toDoList;