console.log("Welcome ot Task Manager");

console.log("Git Testing");

let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let task = prompt("Enter your Task :");
    addTask(task);


})

function addTask(task){
    console.log("Task was Added :" + task);
}

