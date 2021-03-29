import Vehicle from './vehicleClass.js';

const car = new Vehicle('honda', 'blue', 4, 5, 'Diesel', 'Automatic', 200);
console.log(car.distanceTraveled);
console.log(car.toAndFro());

const bike = new Vehicle('Bajaj', 'Red', 0, 4, 'Petrol', 'Manual', 80);
console.log(bike.distanceTraveled);
console.log(bike.toAndFro());
