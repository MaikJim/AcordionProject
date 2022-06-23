    /* Variables */
const acc = document.getElementsByClassName("accordion");
const API_POKEMON = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`
const API_RICK_AND_MORTY = (id) => `https://rickandmortyapi.com/api/character/${id}`
const Cards = (num) => document.getElementById(`card${num}`);
const CardsY = (num) => document.getElementById(`cardy${num}`);

    /* Functions */
function scrollAccordion(){
for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else {
            panel.style.maxHeight += panel.scrollHeight + 50 + "px";
        }
    });
}
}
scrollAccordion();

async function getPokeCards(){
    try {
        for (let i =1; i <= 10; i++){
            const res = await fetch(API_POKEMON(i))
            const data = await res.json()
            Cards(i).innerHTML = `<img src = '${data.sprites.front_default}' alt = "Pokemon">
                                <div>
                                    <h4>Pokemon</h4>
                                    <div>
                                        <p>Name: ${data.name}</p> 
                                        <p>Type:${data.types[0].type.name}</p>
                                    </div>
                                </div>`
        }
    } catch(err){
        console.error(err);
    }
}
getPokeCards()

async function getDigiCards(){
    try {
        for (let x = 1; x <= 10; x++){
            const res = await fetch(API_RICK_AND_MORTY(x))
            const data = await res.json()
            console.log(data)
            CardsY(x).innerHTML = `<img src = '${data.image}' alt = 'Rick and Morty Character'>
                                    <div><h4>Name: ${data.name}</h4>
                                    <p>Species: ${data.species}</p>
                                    <p>Status: ${data.status}</p></div>`
        }
        }
    catch (error) {
        console.log(error);
    }
}
getDigiCards();