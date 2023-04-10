// Déclaration de la classe Tamagotchi.
class Tamagotchi {
    constructor(name, hunger = 100, sleepiness = 100, boredom = 1000){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
}
let myTamagotchi;
// STATS - fonctions qui décrémentent les stats :
const gettingHungry = (myTamagotchi)=>{
    let hunger = document.querySelector(".hunger");
    setInterval(function() {
        hunger.innerHTML = `Faim: ${myTamagotchi.hunger}`;
        myTamagotchi.hunger--;
    }, 200);
};
const gettingSleepy = (myTamagotchi)=>{
    let sleepiness = document.querySelector(".sleepiness");
    setInterval(function() {
        sleepiness.innerHTML = `Amusement: ${myTamagotchi.sleepiness}`;
        myTamagotchi.sleepiness--;
    }, 400);
};
// INTERACTIONS AVEC LES BOUTONS
const feed = ()=>{
    // Augmente la stat "Faim" dès qu'on clique sur le bouton.
    if (myTamagotchi.hunger > 0) myTamagotchi.hunger++;
    let hunger = document.querySelector(".hunger");
    hunger.innerHTML = `Hunger: ${myTamagotchi.hunger}`;
};
// On voit ici si les stats ont atteint zéro dans les 3 catégories. 
const checkIfDead = ()=>{
    let myInterval = setInterval(function() {
        if (myTamagotchi.hunger === 0 || myTamagotchi.sleepiness === 0) {
            alert(`Désolé, ${myTamagotchi.name} est mort...`);
            clearInterval(myInterval);
            // Des que ça atteint zéro, l'image "RiP " s'affiche.
            let pet = document.querySelector(".pet");
            pet.remove();
            let all = document.querySelector(".all");
            all.remove();
            let titles = document.querySelector("#giveNameDiv");
            titles.remove();
            let rip = document.createElement("img");
            rip.setAttribute("src", "rip.png");
            rip.setAttribute("class", "rip");
            let petContainer = document.querySelector(".petContainer");
            petContainer.appendChild(rip);
        }
    });
};
// Donne un nom au Tamagotchi de l'utilisateur.
// Stockage dans une variable appellée "name"
const giveName = ()=>{
    let name = prompt("Quel nom voulez-vous donner \xe0 votre Tamagotchi ?");
    console.log(name);
    let giveNameButton = document.querySelector("#name");
    // Supprime le bouton quand on à donné le nom.
    giveNameButton.remove();
    // Créer un H2 pour accuellir le joueur.
    let greeting = document.createElement("h2");
    greeting.innerHTML = `Interagis avec  ${name} en utilisant les boutons. ${name} NE DOIS PAS MOURIR !`;
    let instructions = document.createElement("p");
    instructions.innerHTML = `Attention aux stats de ${name} ! Si les stats tombent à zéro, ${name} meurt.`;
    // Dernier ajout du appendchild 
    let giveNameDiv = document.querySelector("#giveNameDiv");
    giveNameDiv.appendChild(greeting);
    giveNameDiv.appendChild(instructions);
    // Un nouveau pet est crée de la classe "tamagotchi"
    myTamagotchi = new Tamagotchi(name);
    // La décrémentation des valeurs est déclarée ici ainsi que le statut du Tamagotchi.
    gettingHungry(myTamagotchi);
    gettingSleepy(myTamagotchi);
    checkIfDead();
};
// ---------------------------------------------------------------
// EVENT LISTENERS
// Quand un nouveau joueur veut donner un nom à son nouveau Tamagotchi.
document.querySelector("#name").addEventListener("click", giveName);
document.querySelector("#feed").addEventListener("click", ()=>{
    feed(myTamagotchi);
});
document.querySelector("#lights").addEventListener("click", ()=>{
    lights(myTamagotchi);
});
document.querySelector("#play").addEventListener("click", ()=>{
    play(myTamagotchi);
});

//# sourceMappingURL=index.cea00a9b.js.map
