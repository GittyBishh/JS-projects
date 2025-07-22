let data = JSON.parse(localStorage.getItem("user")) || [];


const initTask = (cont)=>{
    let taskdiv = document.createElement('div'); //.task
    taskdiv.classList.add("task");
    let newTask = document.createElement('p'); //.taskcont
    newTask.classList.add("taskcont");
    newTask.textContent = cont;
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
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    deleteButton.addEventListener('click', ()=>{
        parent.removeChild(taskdiv);

        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i] == cont){
                index = i;
                break;
            }
        }

        data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));

    })

    check.addEventListener('click',()=>{
        newTask.classList.toggle('done');
    })
}



for(let i=0; i<data.length; i++){
    initTask(data[i]);
}

// let cont = "helo";

// initTask(cont);


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
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    deleteButton.addEventListener('click', ()=>{
        parent.removeChild(taskdiv);
        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i] == inputTask){
                index = i;
                break;
            }
        }

        data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));
    })

    check.addEventListener('click',()=>{
        newTask.classList.toggle('done');
    })
    
    data.push(inputTask);
    localStorage.setItem("user", JSON.stringify(data));


}


let addButton = document.querySelector(".addbutton");
addButton.addEventListener('click', addTask);

// let alCheck = document.querySelector("#checked");
// alCheck.checked = true;