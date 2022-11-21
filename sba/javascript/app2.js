const cocktailsOfTheWeek = [
    {
        id: 1, 
        name: "Voodoo Bloody Mary", 
        description: "This Bloody Mary is made with black magic straight from New Orleans! Spicy, savory, and full of bonus snacks!",
        ingredients: ["Black Magic Vodka", "V8 Tomato Juice", "Zing Zang", "salt and pepper", "lemon and lime", "Bleu Cheese Stuffed Olives", "Worcestershire Sauce", "Tobasco"], 
        image: "https://www.bhg.com/thmb/j6jj1L2MWsGxobw_A2q42UmEj_g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bloody-mary-mix-RU272432-844ec68c28e5457c8f26c1edbcf7f20f.jpg",
        location: "Fancy Schmancy Restaurant"
    },
    {
        id: 2, 
        name: "Hendricks Coconut Cocktail",
        description: "This cocktail was created using gin and my favorite kind of coffee brew! It's good for a cold winter night.", 
        ingredients: ["Hendrick's Gin", "coconut water", "cold brew coffee", "Xocolatl bitters"], 
        image: "https://betterbartend.com/wp-content/uploads/2019/03/Coconut-cocktail.jpeg",
        location: "At Home"
    },
    {
        id: 3, 
        name: "Apple Cider Mimomas", 
        description: "This cocktail is the perfect Thanksgiving brunch cocktail. It has all the flavors of fall including apple, cinnamon, spice and everything nice!", 
        ingredients: ["Apple Cider", "Orange Juice", "Champagne or Sparkling Wine", "Fireball whiskey", "Cinnamon", "Sugar"],
        image: "https://www.threeolivesbranch.com/wp-content/uploads/2020/08/cinnamon-apple-cider-mimosa-threeolivesnbranch-1.jpg",
        location: "Fancy Brunch Cafe"
    }
];

const CocktailCard = cocktailsOfTheWeek.map(obj => {
   let div = document.createElement("div");
   div.classList.add('cocktail-card');
   div.innerHTML = `<h3>${obj.name}</h3>
   <img src=${obj.image} height="350px" width="400px" />
   <p>Description: ${obj.description}</p>
   <p>Location: ${obj.location}</p>
   <p class="ingredients"><strong>Ingredients +</strong></p>
   `
   document.querySelector('#recipes-container').appendChild(div);
})

