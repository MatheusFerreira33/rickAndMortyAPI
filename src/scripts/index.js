const main = document.querySelector("main");
const ul = document.createElement("ul");
main.appendChild(ul);

async function render(object) {
    const loading = document.getElementById("loading");
    const result = await object;
    const { results } = result;

    results.forEach(element => {
        loading.classList.add("hide");
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const name2 = document.createElement("span");
        const subTituloNome = document.createElement("h4");
        const subTituloSpecies = document.createElement("h4");
        const especie = document.createElement("span");
        const subTituloLocation = document.createElement("h4");
        const location = document.createElement("span");

        img.src = element.image;
        div.className = "description";

        name2.innerText = element.name;
        especie.innerText = element.species;
        const { name } = element.location;
        location.innerText = name;

        subTituloNome.innerText = "Nome:";
        subTituloSpecies.innerText = "Especie";
        subTituloLocation.innerText = "Origem";

        div.append(subTituloNome, name2, subTituloSpecies, especie, subTituloLocation, location);

        li.append(img, div);
        ul.appendChild(li);
    });
}



async function renderCharacter(object) {
    const array = [object];
    const loading = document.getElementById("loading");
    array.map((element => {
        ul.innerHTML = "";
        loading.classList.toggle("hide");

        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const name2 = document.createElement("span");
        const subTituloNome = document.createElement("h4");
        const subTituloSpecies = document.createElement("h4");
        const especie = document.createElement("span");
        const subTituloLocation = document.createElement("h4");
        const location = document.createElement("span");

        img.src = element.image;
        div.className = "description";

        name2.innerText = element.name;
        especie.innerText = element.species;
        const { name } = element.location;
        location.innerText = name;

        subTituloNome.innerText = "Nome:";
        subTituloSpecies.innerText = "Especie";
        subTituloLocation.innerText = "Origem";

        div.append(subTituloNome, name2, subTituloSpecies, especie, subTituloLocation, location);

        li.append(img, div);
        ul.appendChild(li);

    }))

}



const botao = document.querySelector("button");
botao.addEventListener("click", async (event) => {
    event.preventDefault();
    ul.innerHTML = "";
    const valorInput = document.querySelector("input").value;
    const { results } = await getAllCharacter();
    let id = 0;
    results.find((element => {
        if (element.name.toLowerCase() == valorInput.toLowerCase()) {
            id = element.id
        }
    }))
    getCharacter(id);
})


setTimeout(() => { render(getAllCharacter()) }, 2000);