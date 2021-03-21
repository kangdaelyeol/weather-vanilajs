const form = document.querySelector(".js-form"),
 greetingInput = form.querySelector("input"),
 greet = document.querySelector(".js-greet");

const todof = document.querySelector(".js-todoform");

const show_CN = "show";
const USER_LS = "currentUser";
const show_td = "tdlist__active"

function enrollName(e){
    e.preventDefault();
    const inputVal = greetingInput.value;
    localStorage.setItem(USER_LS, inputVal);
    painting(inputVal);
}

function painting(UN){
    greet.innerText = `Hello! ${UN}`;
    form.classList.remove(show_CN);
    greet.classList.add(show_CN);
    todof.classList.add(show_td);
}
function addform(){
    form.classList.add(show_CN);
    form.addEventListener("submit", enrollName)
}
function loadname(){
    const current = localStorage.getItem(USER_LS);
    if(current === null){ addform();}
    else {painting(current);}
}


function init(){
    loadname();
}

init();