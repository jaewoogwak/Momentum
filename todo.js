const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const test = document.querySelector("h4");
const TODOS_LS = "toDos"; // localStorage

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const spanId = document.querySelectorAll("span");
    
    let i;
    for(i=0; i<spanId.length; i++) {
        spanId[i].classList.add("text");
    }
}

function handleSubmitTODO(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmitTODO);
}

init();