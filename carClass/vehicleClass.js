class Vehicle {
  constructor(
    name,
    color,
    doors,
    numberOfGears,
    fuel,
    gearType,
    distanceTraveled
  ) {
    this.name = name;
    this.color = color;
    this.doors = doors;
    this.numberOfGears = numberOfGears;
    this.fuel = fuel;
    this.geartype = gearType;
    this.distanceTraveled = distanceTraveled;
  }
  toAndFro() {
    return `you will have to move  ${
      this.distanceTraveled * 2
    }km to travel to-and-fro`;
  }
}
export default Vehicle;
