let task = document.querySelector("#tasks");
let btn = document.querySelector("#btn");
let list = document.querySelector("#taskitems");

btn.addEventListener("click", ()=>{
   
        let li = document.createElement("li");
    
    let del = document.createElement("button");
    del.innerText = "Delete";

    li.innerText = task.value;
    list.append(li);
    li.append(del);
    del.addEventListener("click", ()=>{
        li.remove();
    });
    task.value = "";
});