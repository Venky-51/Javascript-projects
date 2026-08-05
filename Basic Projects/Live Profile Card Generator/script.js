let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let collegeInput = document.getElementById("college");


let previewName = document.getElementById("previewName");
let previewAge = document.getElementById("previewAge");
let previewCollege = document.getElementById("previewCollege");


nameInput.addEventListener("input", (e)=>{
    if(e.target.value.trim() === ""){
        previewName.innerText = "Name : Not provided";
    }else{
        previewName.innerText = "Name : " + e.target.value.trim();
    }
});

ageInput.addEventListener("input", (e)=>{
    if(e.target.value === ""){
        previewAge.innerText = "Age : Not provided";
    }
    else if(Number(e.target.value) < 1 || Number(e.target.value) > 100 ){
        previewAge.innerText = "Age : Invalid age";
    }else{
        previewAge.innerText = "Age : " + e.target.value;
    }
});

collegeInput.addEventListener("input", (e)=>{
    if(e.target.value.trim() === ""){
        previewCollege.innerText = "College : Not provided";
    }else{
        previewCollege.innerText = "College : " + e.target.value.trim();
    }
});