let form = document.getElementById('form');
let textInput = document.querySelector('#input');
let msg = document.querySelector("#msg");
let posts = document.querySelector("#posts");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // if(e.textInput.value == ""){
        
    // }
    // e.textInput.innerText = textInput.value;
    console.log("Button clicked");
    formValidation();
    
})

let formValidation = ()=>{
    if(textInput.value==""){
        msg.innerHTML =  "Please Add Something Before Posting";
    }
    else{
        msg.innerHTML = "";
        acceptData();
    }
}



let data = {};
let acceptData= ()=>{
    data["text"] = input.value;
    createPost();
}

let createPost = ()=>{
    posts.innerHTML += //Added '+' So that everytime you posted something you text will start from next div 
    `               
    <div>
     <p>${data.text}</p>
     <span class="options">
     <i onClick = "editPost(this)" class="fa-solid fa-pen-to-square"></i>
     <i onClick = "deletePost(this)" class="fa-solid fa-trash"></i>
     </span>
     </div>`;
input.value="" //To remove text from form once to created the post
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove() ;
}

let editPost = (e)=>{
   input.value =  e.parentElement.previousElementSibling.innerHTML;
   e.parentElement.parentElement.remove() ;
}