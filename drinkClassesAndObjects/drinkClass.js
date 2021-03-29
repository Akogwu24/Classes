class Drink {
  constructor(name, color, price, volume, alcoholic, numberOfBottles) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.volume = volume;
    this.alcoholic = alcoholic;
  }
  bottleToGet(numberOfBottles) {
    if (numberOfBottles > 3) {
      return `you will get${numberOfBottles + 1} bottles of ${
        this.name
      } because you bought more than 3bottles`;
    } else {
      return `Please have your ${numberOfBottles} bottles of ${this.name}`;
    }
  }
}

export default Drink;
// const b = (howMany) => {
//   if (howMany > 3) {
//     console.log(howMany + 1);
//   } else {
//     console.log(howMany);
//   }
// };
// b(5);
