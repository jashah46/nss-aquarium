export const Fish = (fish) => {
    return `
    <img class="fishCardImage" src="./images/clownfish.jpg"
                  alt="clownfish swimming">
    <div class="fishCard">
              
                <p class="fishCard__name">${fish.name}</p>
                <p class="fishCard__species">${fish.species}</p>
                <p class="fishCard__color">${fish.color}</p>
                <p class="fishCard__location">${fish.home}</p>
                <p class="fishCard__length">${fish.length}</p>
                <p class="fishCard__diet">${fish.food}</p>
              </div>    
    `
}
    
    
    /*<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}*/

