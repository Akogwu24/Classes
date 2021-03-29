import Drink from './drinkClass.js';

const softDrink = new Drink('fanta', 'orangeColor', '150NGN', '50cl', false);
console.log(softDrink.alcoholic);

const hardDrink = new Drink('monster', 'dark purple', '400NGN', '50cl', true);
console.log(hardDrink.price);

const water = new Drink('Eva water', 'colourless', '50NGN', '1 litre', false);
console.log(water.bottleToGet(2));
