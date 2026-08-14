const btn = document.querySelector("#btn");
const board = document.querySelector("#displayboard");

const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

btn.addEventListener("click", async()=>{

   
    board.innerHTML = `
    <p>Loading joke...</p>
    `;
    
    try{
        let response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to load joke");
        }

        let data = await response.json();

        if(data.type === "twopart"){

            board.innerHTML = `
            <p>Question: <br>${data.setup}</p>
            <p>Answer: <br>${data.delivery}</p>
            `;

        }else{
            board.innerHTML = `
            <p>${data.joke}</p>
            `;
        }

    }catch(error){
        
        board.innerHTML = `
        <p>${error.message}</p>
        `
    }
});