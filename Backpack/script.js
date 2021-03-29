import Backpack from './Backpack.js';

// const backpack = {
//   name: 'Everyday Backpack',
//   volume: 30,
//   color: 'grey',
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   lidOpen: false,
//   toggleLid: (lidStatus) => {
//     this.lidOpen = lidStatus;
//   },
//   newStrapLength: (lengthLeft, lengthRight) => {
//     this.strapLength.left = lengthLeft;
//     this.starLength.right = lengthRight;
//   },
// };

// console.log(backpack);

// //dot notation
// console.log(backpack.pocketNum);

// //bracket Notation
// console.log(backpack['color']);
// const query = 'color';
// console.log(backpack[query]);

// //Methods
// console.log(backpack.lidOpen);
// console.log(backpack.toggleLid(true));
// console.log(backpack.lidOpen);

//instantiating an Object called everydayPack from the Backpack Class
const everydayPack = new Backpack(
  'everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false
);
console.log('The everydayPack object', everydayPack);
console.log('The color of the everyday pack object', everydayPack.color);
