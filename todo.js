const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const test = document.querySelector("h4");
const TODOS_LS = "toDos"; // localStorage

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);   
    })
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();

}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify : JS object -> string 
} 

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;

    const spanId = document.querySelectorAll("span");
    let i;
    for(i=0; i<spanId.length; i++) {
        spanId[i].classList.add("text");
    }

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmitTODO(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        if(parsedToDos !== null){
            parsedToDos.forEach(function(toDo) {
                paintToDo(toDo.text);
            });
        }
         
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmitTODO);
}

init();