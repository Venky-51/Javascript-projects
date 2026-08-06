let text = document.getElementById("text");
let status = document.getElementById("status");
let count = document.getElementById("charCount");

text.addEventListener("input", (e)=>{
    count.innerText = "Characters : "+e.target.value.length + "/100";
    if(e.target.value.length === 0){
        status.innerText = "Status : keep typing...";
        status.style.color = "green";
    }else if(e.target.value.trim() === ""){
        status.innerText = "Status : Please enter valid text";
        status.style.color = "orange";
    }else if(e.target.value.length === 100){
        status.innerText = "Status : Maximum character limit reached";
        status.style.color = "blue";
    }else if(e.target.value.length > 100){
        status.innerText = "Status : Character limit exceeded";
        status.style.color = "red";
    }else{
        status.innerText = "Status : keep typing...";
        status.style.color = "green";
    }
});

