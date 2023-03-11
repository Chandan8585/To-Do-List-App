// const addTask = document.querySelector('.add-new-task');
const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textArea = document.getElementById("textarea");
const msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");







form.addEventListener("submit", (e)=>{
     e.preventDefault();
     formValidation();
});
let formValidation = ()=>{
    if(textInput.value === ""){
        
    msg.innerHTML="Task Can not be Blank"; 
   
    }
    else{
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};
let acceptData = ()=>{
        data["text"] = textInput.value;
        data["dateInput"] = dateInput.value;
        data["textArea"] = textArea.value;

createTasks();





    //     <div class="task">
    //     <h3></h3>
    //     <h5>data["dateInput"]</h5>
    //     <p>data["textArea"]</p>
    //     <span class="options">
    //         <i class="fa-solid fa-trash"></i>
    //         <i class="fa-solid fa-pen-to-square"></i>
    //     </span>
    // </div>
}
let createTasks = ()=>{
  tasks.innerHTML += "Task has been updated";
}