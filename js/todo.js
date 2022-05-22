const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let todos = [];

function saveTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(){
    const li = event.path[2];
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));

    saveTodo();
}

function doitTodo(){
    const li = event.path[2];
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));

    localStorage.setItem('successCount', parseInt(localStorage.getItem('successCount')) + 1);

    const getUsername = localStorage.getItem('username');
    
    paintGreetings(getUsername);

    saveTodo();
}

function paintTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    const div = document.createElement("div");
    const button = document.createElement("button");
    const button2 = document.createElement("button");

    li.appendChild(span);
    span.innerText = todo.text;

    div.classList.add('todo-li-div');
    li.appendChild(div);
    
    div.appendChild(button2);
    button2.innerText = "🍀";
    button2.addEventListener("click", doitTodo);

    div.appendChild(button);
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    todoList.appendChild(li);
}

function handleTodoSubmit(){
    event.preventDefault();
    
    //const newTodo = todoInput.value;
    const todoObj = {
        id : Date.now(),
        text : todoInput.value
    }

    todoInput.value = "";
    
    todos.push(todoObj);
    paintTodo(todoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const saveTodos = localStorage.getItem(TODO_KEY);
const saveSuccessCount = localStorage.getItem('successCount');

if(saveTodos){
    const parseTodos = JSON.parse(saveTodos);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);
}

