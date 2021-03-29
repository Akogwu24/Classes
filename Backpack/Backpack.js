//Classes
class Backpack {
  constructor(
    //defines parameters
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define Properties
    //the this keyword points to the current object
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    (this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    }),
      (this.lidOpen = lidOpen);
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}
export default Backpack;
