async function getAllCharacter(){
    const allCharacter = await fetch("https://rickandmortyapi.com/api/character",{
        method: "GET",
        "content-type": "application/json"
    })
    .then((Response=>{
        return Response.json();
    }));

    return allCharacter;
}


async function getCharacter(id){
    const loading = document.getElementById("loading");
    const findCharacter = await fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method:"GET",
        "Content-Type": "application/json"
    })
    .then((Response=>{
        return Response.json();
    })) 
        loading.classList.toggle("hide");
        return setTimeout(()=>{renderCharacter(findCharacter)},2000);
}