// let value = 3;

const addTask = ()=>{
    let inputTask = document.querySelector(".addtask").value;

    let taskdiv = document.createElement('div'); //.task
    taskdiv.classList.add("task");
    let newTask = document.createElement('p'); //.taskcont
    newTask.classList.add("taskcont");
    newTask.textContent = inputTask;
    let buttonDiv = document.createElement('div'); //.buttons
    buttonDiv.classList.add("buttons");
    let check = document.createElement('input'); //.checkbox
    check.classList.add("checkbox");
    check.type = 'checkbox';
    let deleteButton = document.createElement('button'); //.delete
    deleteButton.classList.add("delete");
    deleteButton.textContent = "delete";
    let priorButton = document.createElement('button'); //.prior
    priorButton.classList.add("prior");
    priorButton.textContent = "Prior";

    
    buttonDiv.appendChild(check);
    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(priorButton);
    
    taskdiv.appendChild(newTask);
    taskdiv.appendChild(buttonDiv);

    taskdiv.id = "task";
    // value++;
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    // let newEl = document.createElement('p');
    // newEl.textContent = inputTask;
    // let parent = document.querySelector(".viewboard");
    // parent.appendChild(newEl);


}

let addButton = document.querySelector(".addbutton");
addButton.addEventListener('click', addTask);

// let val = 0;

let alCheck = document.querySelector("#checked");
alCheck.checked = true;
    
let checkboxes = document.querySelectorAll(".checkbox");
for(let i = 0; i<checkboxes.length;i++){
    checkboxes[i].addEventListener('click',()=>{

        taskCont = checkboxes[i].parentElement.parentElement.querySelector(".taskcont");
        taskCont.classList.toggle("done");
    });
}

let tasks = document.querySelectorAll(".task");