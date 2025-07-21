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
    check.classList.add(".checkbox");
    check.type = 'checkbox';
    let deleteButton = document.createElement('button'); //.delete
    deleteButton.classList.add("delete");
    deleteButton.textContent = "delete";

    
    buttonDiv.appendChild(check);
    buttonDiv.appendChild(deleteButton);
    
    taskdiv.appendChild(newTask);
    taskdiv.appendChild(buttonDiv);
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    // let newEl = document.createElement('p');
    // newEl.textContent = inputTask;
    // let parent = document.querySelector(".viewboard");
    // parent.appendChild(newEl);

}

let addButton = document.querySelector(".addbutton");
addButton.addEventListener('click', addTask);

