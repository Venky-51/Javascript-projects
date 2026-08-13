let btn = document.querySelector("#btn");
let userData = document.querySelector("#userData");

function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name : "Venky", 
                email : "venky@example.com", 
                status : "Active"
            });
        },2000)
    });
}

btn.addEventListener("click", async ()=>{
    userData.innerHTML = `<p class="loading">Loading user....</p>`;

    try{
        let user = await getUser();
        userData.innerHTML = `
        <div class = "user-card">
            <h2>${user.name}</h2>
            <p><strong>Email:</strong>${user.email}</p>
            <p><strong>status:</strong>${user.status}</p>
        </div>
        `;
    }catch(error){
        userData.innerHTML = `
        <p class="error">${error}</p>
        `;
    }
    
});



