const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const loginTodoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();

    loginTodoForm.style.display = 'flex';

    loginForm.style.display = 'none';
    const username = loginInput.value;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    const getUsername = localStorage.getItem(USERNAME_KEY);

    paintGreetings(getUsername);
}

function paintGreetings(username){

    let successCount = localStorage.getItem('successCount');

    if(successCount === undefined || successCount === null || isNaN(successCount)){
        successCount = 0;
        localStorage.setItem('successCount', successCount);
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}, Your Success Todo! : ${successCount}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginTodoForm.style.display = 'none';
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    loginForm.style.display = 'none';
    loginTodoForm.style.display = 'flex';
    paintGreetings(savedUsername);
}