let data = JSON.parse(localStorage.getItem("user")) || [];


const initTask = (obj)=>{
    const cont = obj.task;//retrive text conetent

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
    let priorButton = document.createElement('button'); //.prioritize
    priorButton.classList.add("prioritize");
    priorButton.textContent = "Prioritize";
    let depriorButton = document.createElement('button'); //.deprioritize
    depriorButton.classList.add("deprioritize");
    depriorButton.textContent = "deprioritize";


    if(obj.priority===0){

        taskdiv.classList.add("midprior");
    }
    else if(obj.priority===1){

        taskdiv.classList.add("highprior");
        priorButton.classList.toggle('hidebutton');
    }
    else if(obj.priority===-1){
        
        taskdiv.classList.add("leastprior");
        depriorButton.classList.toggle('hidebutton');
    }

    
    buttonDiv.appendChild(check);
    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(priorButton);
    buttonDiv.appendChild(depriorButton);

    
    taskdiv.appendChild(newTask);
    taskdiv.appendChild(buttonDiv);

    if (obj.value){
        check.checked = true;
        newTask.classList.toggle('done');

    }
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    deleteButton.addEventListener('click', ()=>{
        parent.removeChild(taskdiv);

        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i].task == cont){
                index = i;
                break;
            }
        }

        data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));

    })

    check.addEventListener('click',()=>{
        newTask.classList.toggle('done');
        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i].task == cont){
                index = i;
                break;
            }
        }

        data[index].value = !data[index].value;

        // data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));
    })

    priorButton.addEventListener('click',()=>{
        let index = 0;

        
        for(let i = 0; i<data.length;i++){
            if(data[i].task == cont){
                index = i;
                initPrior = data[index].priority;
                data[index].priority++;
                
                if(data[index].priority===1 && initPrior===0){
                    taskdiv.classList.replace("midprior", "highprior");
                    priorButton.classList.add("hidebutton");
                    depriorButton.classList.remove("hidebutton");
                }
                else if(data[index].priority===0 && initPrior===-1){
                    taskdiv.classList.replace("leastprior", "midprior");
                    depriorButton.classList.remove("hidebutton");
                    
                }
                break;
            }
        }
        
        localStorage.setItem("user", JSON.stringify(data));
        
    })
    depriorButton.addEventListener('click',()=>{
        let index = 0;
        
        for(let i = 0; i<data.length;i++){
            if(data[i].task == cont){
                index = i;
                initPrior = data[index].priority;
                data[index].priority--;
                
                if(data[index].priority===0 && initPrior===1){
                    taskdiv.classList.replace("highprior", "midprior");
                    priorButton.classList.remove("hidebutton");
                    
                }
                else if(data[index].priority===-1 && initPrior===0){
                    taskdiv.classList.replace("midprior", "leastprior");
                    depriorButton.classList.add("hidebutton");
                    
                }
                break;
            }
        }
        
        localStorage.setItem("user", JSON.stringify(data));
    })
}



for(let i=0; i<data.length; i++){
    initTask(data[i]);
}

// let cont = "helo";

// initTask(cont);


//new task adding--------------------->


const addTask = ()=>{
    let inputTask = document.querySelector(".addtask").value;

    let taskdiv = document.createElement('div'); //.task
    taskdiv.classList.add("task");
    taskdiv.classList.add("midprior");
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
    let priorButton = document.createElement('button'); //.prioritize
    priorButton.classList.add("prioritize");
    priorButton.textContent = "Prioritize";
    let depriorButton = document.createElement('button'); //.deprioritize
    depriorButton.classList.add("deprioritize");
    depriorButton.textContent = "deprioritize";

    
    buttonDiv.appendChild(check);
    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(priorButton);
    buttonDiv.appendChild(depriorButton);
    
    taskdiv.appendChild(newTask);
    taskdiv.appendChild(buttonDiv);
    
    let parent = document.querySelector('.viewboard');
    parent.appendChild(taskdiv);

    data.push(
        {
            "task": inputTask,
            "value": false,
            "priority": 0
        }
    );
    localStorage.setItem("user", JSON.stringify(data));

    deleteButton.addEventListener('click', ()=>{
        parent.removeChild(taskdiv);
        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i].task == inputTask){
                index = i;
                break;
            }
        }

        data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));
    })

    check.addEventListener('click',()=>{
        newTask.classList.toggle('done');

        let index = 0;

        for(let i = 0; i<data.length;i++){
            if(data[i].task == inputTask){
                index = i;
                break;
            }
        }

        data[index].value = !data[index].value;

        // data.splice(index,1);
        localStorage.setItem("user", JSON.stringify(data));

        
    })
    
    priorButton.addEventListener('click',()=>{
        let index = 0;
        
        for(let i = 0; i<data.length;i++){
            if(data[i].task == inputTask){
                index = i;
                let initPrior = data[index].priority;
                data[index].priority++;
                
                if(data[index].priority===1 && initPrior===0){
                    taskdiv.classList.replace("midprior", "highprior");
                    priorButton.classList.add("hidebutton");
                    depriorButton.classList.remove("hidebutton");
                }
                else if(data[index].priority===0 && initPrior===-1){
                    taskdiv.classList.replace("leastprior", "midprior");
                    depriorButton.classList.remove("hidebutton");
                    break;
                }
            }
            
        }
        localStorage.setItem("user", JSON.stringify(data));

    })

    depriorButton.addEventListener('click',()=>{
        let index = 0;
        
        for(let i = 0; i<data.length;i++){
            if(data[i].task == inputTask){
                index = i;
                let initPrior = data[index].priority;
                data[index].priority--;
                
                if(data[index].priority===0 && initPrior===1){
                    taskdiv.classList.replace("highprior", "midprior");
                    priorButton.classList.remove("hidebutton");
                    
                }
                else if(data[index].priority===-1 && initPrior===0){
                    taskdiv.classList.replace("midprior", "leastprior");
                    depriorButton.classList.add("hidebutton");
                    
                }
                break;
            }
        }
        
        localStorage.setItem("user", JSON.stringify(data));
    })
    

}


let addButton = document.querySelector(".addbutton");
addButton.addEventListener('click', addTask);

// let alCheck = document.querySelector("#checked");
// alCheck.checked = true;