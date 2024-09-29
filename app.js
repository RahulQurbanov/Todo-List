let title=document.querySelector("#inp");
let priority=document.querySelector("#priority");
let btn=document.querySelector(".btn");
let todos=document.querySelector(".todos")

btn.addEventListener("click",function(){
    let todo=document.createElement("div");
    todo.className="todo";
    todo.innerHTML=`
    <div class="to">
        <p class="text">${title.value}</p>
        <h5 clas="pri">${priority.value}</h5>
    </div>
    <div class="icon">
        <button id="edit">Edit</button>
        <i class="fa-solid fa-trash" id="del"></i>
   </div>
    `
    let del=todo.querySelector("#del");
    let p=todo.querySelector(".text");
    let h=todo.querySelector(".pri")
    
    p.contentEditable=false;
    del.addEventListener("click",function(){
        todo.remove()
    })

    let edit=todo.querySelector("#edit");

    edit.addEventListener("click",function(){

        if(edit.textContent=="Edit"){
        p.contentEditable=true;
        edit.textContent="Save"
        }
        else{
            edit.textContent="Edit"
            p.contentEditable=false;
        }})
    todos.appendChild(todo);
})