// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Boat` class that extends the `Vehicle` class
class Boat extends Vehicle {
constructor(id, type, crew) {

  super(id, 0 , 'bwom');
  this.type = type;
  this.crew = crew;
}
useHorn(){
  console.log(this.sounc);
}
crewSoundOff() {
  this.crew.forEach((memver) => {
    console.log(`${member} reporting for duty!`);    
  });
}
}
const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
