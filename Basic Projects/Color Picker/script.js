let buttons = document.querySelectorAll("button");
let preview = document.querySelector(".box");
let colorName = document.querySelector("h1");

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        colorName.innerText = "Select color : " + e.target.innerText;
        preview.style.backgroundColor = e.target.innerText;
    })
})